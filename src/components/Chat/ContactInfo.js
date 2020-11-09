import React, {Component} from 'react';

class ContactInfo extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.selectedContact.contactName}</h2>
			</div>
		)
	}

}

export default ContactInfo;