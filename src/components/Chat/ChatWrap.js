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
				<div>
					<ContactInfo selectedContact={selectedContact} />
					<Conversation selectedContact={selectedContact}/>
					<MessageInput sendMessage={this.props.sendMessage}/>
				</div>
			)
		} else {
			return (
				<p>Select someone to chat with</p>
			)
		}
	}
}

/*		if (Boolean(this.props.contacts.find((contact) => {
			return contact.selected === true;
		})))
			return (
				<div>
					<ContactInfo/>
					<Conversation selectedContact={this.props.contacts.find((contact) => {
						return contact.selected === true;
					})}/>
					<MessageInput/>
				</div>
			)
	}*/

export default ChatWrap;