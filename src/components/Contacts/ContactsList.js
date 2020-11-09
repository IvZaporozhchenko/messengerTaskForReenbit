import React from 'react';

function ContactsList(props) {
	return (props.contacts.map((contact) => {
		return (
			<div key={contact.id}>
				{contact.contactName}
			</div>
		)
	}))
}

export default ContactsList;