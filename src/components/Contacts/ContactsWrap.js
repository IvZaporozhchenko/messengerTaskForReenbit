import React, {Component} from 'react';

import UserInfo from "./UserInfo";
import SearchContact from "./SearchContact";
import ContactsList from "./ContactsList";

class ContactsWrap extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchedContact: ""
		}

		this.searchContact = this.searchContact.bind(this);
	}

	//Contact Search
	searchContact(value) {
		this.setState({
			searchedContact: value
		})
	}



	render() {
		return (
			<div className="ContactsWrap">
				<div className="UserInfo">
					<UserInfo />
					<SearchContact searchContact = {this.searchContact} />
				</div>
				<div className="chats">
					<h2><span>Chats</span></h2>
					<ContactsList contacts={this.props.contacts}
					              searchedContact={this.state.searchedContact}
					              selectContact={this.props.selectContact}
					/>
				</div>
			</div>
		)
	}

}

export default ContactsWrap;