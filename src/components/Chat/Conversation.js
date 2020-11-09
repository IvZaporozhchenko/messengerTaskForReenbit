import React, {Component} from 'react';

class Conversation extends Component {
	render() {
		return (this.props.selectedContact.chatHistory.map((message) => {
			const date = message.messageDate;
					return (<p key={new Date(date.yy, date.mm, date.dd, date.hh, date.min, date.sec)}
					           className={message.messageType}>
						{message.messageText}
						<br />
						<span>
							{(date.min < 10) ? <span>{date.hh}:0{date.min} </span> : <span>{date.hh}:{date.min} </span>}
							<span>{date.dd}/{date.mm}/{date.yy}</span>
						</span>
					</p>)
				}
			)
		)
	}
}

export default Conversation;