import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "../../styles/App.css";

import ContactsWrap from "../Contacts/ContactsWrap";
import ChatWrap from "../Chat/ChatWrap";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		}

		this.selectContact = this.selectContact.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount() {
		this.setState({
			contacts: [
				{
					id: uuidv4(),
					contactName: "John",
					contactPhoto: "",
					selected: false,
					chatHistory: [
						{
							messageType: "inMessage",
							messageText: "Hello",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 8,
								hh: 12,
								min: 56,
								sec: 0
							}
						},
						{
							messageType: "outMessage",
							messageText: "Hi",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 8,
								hh: 13,
								min: 0,
								sec: 0
							}
						},
						{
							messageType: "inMessage",
							messageText: "How are you?",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 8,
								hh: 13,
								min: 1,
								sec: 0
							}
						}
					]
				},
				{
					id: uuidv4(),
					contactName: "Bob",
					contactPhoto: "",
					selected: false,
					chatHistory: [
						{
							messageType: "inMessage",
							messageText: "We need to meet",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 7,
								hh: 14,
								min: 30,
								sec: 0
							}
						},
						{
							messageType: "outMessage",
							messageText: "Sorry, Im busy",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 7,
								hh: 14,
								min: 35,
								sec: 0
							}
						}
					]
				},
				{
					id: uuidv4(),
					contactName: "Den",
					contactPhoto: "",
					selected: false,
					chatHistory: [
						{
							messageType: "inMessage",
							messageText: "I will find you and I will kill you",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 6,
								hh: 15,
								min: 56,
								sec: 0
							}
						},
						{
							messageType: "outMessage",
							messageText: "Very funny!",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 6,
								hh: 17,
								min: 0,
								sec: 0
							}
						},
						{
							messageType: "inMessage",
							messageText: "I know",
							messageDate: {
								yy:2020,
								mm: 11,
								dd: 6,
								hh: 17,
								min: 20,
								sec: 0
							}
						}
					]
				}
			]
		})
	}

	//Select Contact
	selectContact(id) {
		this.setState({
			contacts: this.state.contacts.map((contact) => {
				contact.selected = false;
				if(contact.id === id) {
					contact.selected = !contact.selected;
				}
				return contact;
			})
		})
	}

	//Send Message
	sendMessage(message) {
		let newMessage, now = new Date(), updatedContacts;
		newMessage = {
				messageType: "outMessage",
				messageText: message,
				messageDate: {
					yy: now.getFullYear(),
					mm: now.getMonth() + 1,
					dd: now.getDate(),
					hh: now.getHours(),
					min: now.getMinutes(),
					sec: now.getSeconds()
				}
			};
		updatedContacts = this.state.contacts.map(el => (el.selected === true ? Object.assign(el, {chatHistory : [...el.chatHistory, newMessage]}) : el));


		this.setState({
			contacts: updatedContacts
		})
	}


	render() {
		return (
			<div className="App">
				<ContactsWrap contacts={this.state.contacts}
				              selectContact={this.selectContact}
				/>
				<ChatWrap contacts={this.state.contacts}
				          sendMessage={this.sendMessage}
				/>
			</div>
		)
	}

}

export default App;