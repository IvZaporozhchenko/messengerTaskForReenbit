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
			<div>
				<UserInfo />
				<SearchContact searchContact = {this.searchContact} />
				<ContactsList contacts={this.props.contacts}
				              searchedContact={this.state.searchedContact}
				/>
			</div>
		)
	}

}

export default ContactsWrap;