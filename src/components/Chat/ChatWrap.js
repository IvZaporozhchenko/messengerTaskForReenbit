import React, {Component} from 'react';

import ContactInfo from "./ContactInfo";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";

class ChatWrap extends Component {
	render() {
		//console.log(selectedContact);
		return (
			<div>
				<ContactInfo />
				<Conversation selectedContact={this.props.contacts.find((contact) => {
					return contact.selected === true;
				})} />
				<MessageInput />
			</div>
		)
	}

}

export default ChatWrap;