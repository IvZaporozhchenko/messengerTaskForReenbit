import React, {Component} from 'react';

import UserInfo from "./UserInfo";
import SearchContact from "./SearchContact";
import ContactsList from "./ContactsList";

class ContactsWrap extends Component {
	render() {
		console.log(this.props.contacts);
		return (
			<div>
				<UserInfo />
				<SearchContact />
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}

}

export default ContactsWrap;