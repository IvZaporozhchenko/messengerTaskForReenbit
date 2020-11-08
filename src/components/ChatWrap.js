import React, {Component} from 'react';

import ContactInfo from "./ContactInfo";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";

class ChatWrap extends Component {
	render() {
		return (
			<div>
				<ContactInfo />
				<Conversation />
				<MessageInput />
			</div>
		)
	}

}

export default ChatWrap;