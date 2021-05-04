import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = { userName: '' };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ userName: value });
  }

  sendLogin = (e) => {
    e.preventDefault();
    this.props.onUserLogin(this.state.userName);
    this.setState({ userName: '' });
  }

  render() {
    return (
      <form onSubmit={this.sendLogin}>
        <input type="text" value={this.state.userName} onChange={this.handleChange} class="form-input" />
        <input type="submit" value="Send UserName" class="button"/>
      </form>
    )
  }
}