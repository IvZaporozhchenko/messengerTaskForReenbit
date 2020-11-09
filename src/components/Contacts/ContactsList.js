import React from 'react';

function ContactsList(props) {
	props.contacts.sort((cont1, cont2) => {
		const a = cont1.chatHistory[cont1.chatHistory.length - 1].messageDate,
			b = cont2.chatHistory[cont2.chatHistory.length - 1].messageDate;
		return new Date(b.yy, b.mm, b.dd, b.hh, b.min) - new Date(a.yy, a.mm, a.dd, a.hh, a.min);
	});
		/*.filter((a) => {
		console.log(a);
		return a.contactName === "John";
	});*/
	return (props.contacts.map((contact) => {
		return (
			<div key={contact.id}>
				{contact.contactName}
			</div>
		)
	}))
}

export default ContactsList;