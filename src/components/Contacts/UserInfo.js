import React from 'react';
import avatar from "../../img/avatar.png"

function UserInfo(props) {
	return (
		<div>
			<img src={avatar}/>
			<h2>Anonymous</h2>
		</div>
	)
}

export default UserInfo;