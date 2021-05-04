import React, { Component } from 'react';

export default class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = { chatMessage: '' };
  }
 
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ chatMessage: value });
  }

  sendMessage = (e) => {
    e.preventDefault();
    this.props.onMessageSend(this.state.chatMessage);
    this.setState({ chatMessage: '' });
  }

  render() {
    return (
      <form onSubmit={this.sendMessage}>
        <input type="text" value={this.state.chatMessage} onChange={this.handleChange} />
        <input type="submit" value="Send Message" />
      </form>
    )
  }
}