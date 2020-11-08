import React, {Component} from 'react';

class MessageInput extends Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Type some message"/>
				<input type="submit" value="Send"/>
			</form>
		)
	}

}

export default MessageInput;