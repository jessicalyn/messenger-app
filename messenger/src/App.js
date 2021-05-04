import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import Conversation from './Conversation';
import Chatbox from './Chatbox';
import Login from './Login';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      chatLog: []
    }
  }
  socket = '';

  componentDidMount() {
    this.setupSocket();
  }

  setupSocket = () => {
    this.socket = io('http://localhost:3001', {
      withCredentials: true
    });

    this.socket.on('connection', () => {
      console.log('FE connected to BE')
    });
    
    this.socket.on('chat message', (message) => {
      this.updateChatLog(message);
    });

    this.socket.on('new user', (name) => {
      this.updateChatLog(`${name} has joined the chat.`);
    }) 
  }
  
  sendMessage = (message) => {
    const updatedMessage = `${this.state.user}: ${message}`;
    this.socket.emit('chat message', updatedMessage);
    this.updateChatLog(`You: ${message}`);
  }
  
  loginUser = (userName) => {
    this.socket.emit('user', userName);
    this.setState({ user: userName });
    this.updateChatLog(`Welcome ${userName}, you have joined the chat.`);
  }

  updateChatLog = (message) => {
    let updatedChatLog = [...this.state.chatLog, message];
    this.setState({ chatLog: updatedChatLog });
  }

  render() {
    let body
    if (this.state.user === null) {
      body = <div class="containers login-container">
          <h3>Please login to join the chatroom.</h3>
          <Login onUserLogin={this.loginUser} />
        </div>
    } else {
      body = <div class="containers conversation-container">
          <h3>Type a message into the form below to starting chatting with your friends!</h3>
          <Conversation chatLog={this.state.chatLog} />
          <Chatbox onMessageSend={this.sendMessage}/>
        </div>
    }
    return (
      <div class="containers app-container">
        <h2>A Simple Messaging App</h2>
        {body}
      </div>
      );
    }
}
