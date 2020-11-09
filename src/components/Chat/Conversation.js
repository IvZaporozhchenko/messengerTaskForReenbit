import React, {Component} from 'react';

class Conversation extends Component {
	render() {
		if(this.props.selectedContact) {
			return (this.props.selectedContact.chatHistory.map((message) => {
				return (<p>{message.messageText}</p>)
			}))
		} else {
			return (
				<div>
					<p>Select someone to talk with</p>
				</div>
			)
		}
	}

}

export default Conversation;