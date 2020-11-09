import React, {Component} from 'react';

class MessageInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			outMessage: ""
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.sendMessage(this.state.outMessage);
		this.setState({
			outMessage: ""
		})
	}

	onChange(e) {
		this.setState({
			outMessage: e.target.value
		})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text"
				       placeholder="Type some message"
				       value={this.state.outMessage}
				       onChange={this.onChange}
				/>
				<input type="submit" value="Send"/>
			</form>
		)
	}

}

export default MessageInput;