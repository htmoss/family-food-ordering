import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';
// import { FaCheck, FaTimes } from 'react-icons/fa';
import User from './User';
import { Link } from 'react-router-dom';

const Users = () => {
	const {
		setUsers,
		users,
		userName,
		setUserName,
		// deleteUser,
		isEating,
		// setIsEating,
	} = useContext(UserContext);

	const addUser = (e) => {
		e.preventDefault();
		users && setUsers([...users, { name: userName, isEating, id: uuidv4() }]);
		setUserName('');
	};

	return (
		<div>
			<h1>Who is eating today?</h1>
			<ul>
				{users.map((user) => {
					return <User user={user} key={user.id} />;
				})}
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
			<Link to='/'>
				<button className='btn'>Back</button>
			</Link>
			<Link to='/orders'>
				<button className='btn'>Next</button>
			</Link>
		</div>
	);
};

export default Users;
