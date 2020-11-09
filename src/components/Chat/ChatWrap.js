import React, {Component} from 'react';

import ContactInfo from "./ContactInfo";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";

class ChatWrap extends Component {
	render() {
		if(Boolean(this.props.contacts.find((contact) => {return contact.selected === true}))) {
			let selectedContact = this.props.contacts.find((contact) => {
				return contact.selected === true;
			})
			return (
				<div className="ChatWrap">
					<ContactInfo selectedContact={selectedContact} />
					<div className="conversation">
						<Conversation selectedContact={selectedContact}/>
					</div>
					<MessageInput sendMessage={this.props.sendMessage}/>
				</div>
			)
		} else {
			return (
				<p className="placeholder">Select someone to chat with</p>
			)
		}
	}
}

export default ChatWrap;