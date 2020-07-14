import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';

const Users = () => {
	const { setUsers, users, userName, setUserName } = useContext(UserContext);

	const addUser = (e) => {
		e.preventDefault();
		users && setUsers([...users, { name: userName, eating: true }]);
		console.log(...users);
		setUserName('');
	};

	return (
		<div>
			<h1>Who is eating today?</h1>
			<ul>
				{users.map((user) => (
					<li key={uuidv4()}>{user.name}</li>
				))}
			</ul>

			<form onSubmit={addUser}>
				<input
					type='text'
					placeholder='Name'
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button>Add user</button>
			</form>
		</div>
	);
};

export default Users;
