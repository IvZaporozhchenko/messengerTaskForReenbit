import React, {Component} from 'react';

class SearchContact extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.searchContact(e.target.value);
	}

	render()
	{
		return (
			<div>
				<input type="text"
				       title="searchedContact"
				       placeholder="Search or start new chat"
				       onChange={this.onChange}
				/>
			</div>
		)
	}

}

export default SearchContact;