import React, {Component} from 'react';
import "../styles/App.css";

import ContactsWrap from "./ContactsWrap";
import ChatWrap from "./ChatWrap";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: [
				{
					name: "John"
				},
				{
					name: "Den"
				},
				{
					name: "Bob"
				}
			]
		}

	}

	render() {
		return (
			<div className="App">
				<ContactsWrap contacts = {this.state.contacts} />
				<ChatWrap />
			</div>
		)
	}

}

export default App;

/*function App() {
	return (
		<div className="App">
		</div>
	);
}*/
