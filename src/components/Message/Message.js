import React, {Component} from 'react';
import './Message.css';



export default class Message extends Component {

  render() {
    return (
      <div className="message">
      <img src={this.props.message.photoURL}/>
                <span className="message__author">
                    {this.props.message.userName}:
                </span>
        {this.props.message.message}
      </div>
    )
  }
}
