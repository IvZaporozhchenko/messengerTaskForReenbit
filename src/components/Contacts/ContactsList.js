import React from 'react';

function ContactsList(props) {
	const SORTED_AND_FILTERED_CONTACTS = props.contacts.sort((contact1, contact2) => {
		const a = contact1.chatHistory[contact1.chatHistory.length - 1].messageDate,
			b = contact2.chatHistory[contact2.chatHistory.length - 1].messageDate;
		return new Date(b.yy, b.mm, b.dd, b.hh, b.min) - new Date(a.yy, a.mm, a.dd, a.hh, a.min);
	}).filter((contact) => {
		if(props.searchedContact) {
			return contact.contactName.toLocaleLowerCase().includes(props.searchedContact.toLowerCase());
		} else {
			return contact;
		}

	});
	return (SORTED_AND_FILTERED_CONTACTS.map((contact) => {
		return (
			<div key={contact.id}>
				{contact.contactName}
			</div>
		)
	}))
}

export default ContactsList;