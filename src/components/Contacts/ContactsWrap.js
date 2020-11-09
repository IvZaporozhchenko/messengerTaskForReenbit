import React from 'react';

import UserInfo from "./UserInfo";
import SearchContact from "./SearchContact";
import ContactsList from "./ContactsList";

function ContactsWrap(props) {
	return (
		<div>
			<UserInfo />
			<SearchContact />
			<ContactsList contacts={props.contacts} />
		</div>
	)
}

export default ContactsWrap;