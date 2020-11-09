import React, {Component} from 'react';
import avatar from "../../img/avatar.png"

class ContactInfo extends Component {
	render() {
		return (
			<div className="ContactInfo">
				<img src={avatar} />
				<h2>{this.props.selectedContact.contactName}</h2>
			</div>
		)
	}

}

export default ContactInfo;