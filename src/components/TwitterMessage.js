import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      count: 0
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value,
      count: 280 - event.target.value.length
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
