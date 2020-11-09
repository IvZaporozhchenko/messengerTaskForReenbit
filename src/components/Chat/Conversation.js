import React, {Component} from 'react';

class Conversation extends Component {
	render() {
		return (this.props.selectedContact.chatHistory.map((message) => {
					return (<p>{message.messageText}</p>)
				}
			)
		)
	}
}

export default Conversation;