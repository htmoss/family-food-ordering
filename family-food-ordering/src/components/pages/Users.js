import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../context/UserContext';
// import { FaCheck, FaTimes } from 'react-icons/fa';
import User from '../User';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';

const Users = () => {
	const { setUsers, users, userName, setUserName, isEating } = useContext(
		UserContext
	);
	const [showAlert, setShowAlert] = useState('');

	const addUser = (e) => {
		e.preventDefault();
		if (userName === '') {
			blankAlert();
		} else {
			let pic = (Math.floor(Math.random() * 42) + 1).toString();
			users &&
				setUsers(
					[
						...users,
						{
							name: userName.toLowerCase(),
							isEating,
							order: [],
							pic: pic,
							id: uuidv4(),
						},
					].sort((a, b) => (a.name > b.name ? 1 : -1))
				);
		}
		setUserName('');
	};

	const noUsersAlert = () => {
		setShowAlert('Please create and select at least one person to order.');
		setTimeout(() => {
			setShowAlert('');
		}, 3000);
	};

	const blankAlert = () => {
		setShowAlert('Please enter a name.');
		setTimeout(() => {
			setShowAlert('');
		}, 3000);
	};

	return (
		<div className='users'>
			<Link to='/'>
				<FaArrowLeft className='back-arrow' />
			</Link>
			<h1 className='page-title'>Who is eating today?</h1>
			<ul className='users-grid'>
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
				<button className='btn'>Add user</button>
			</form>

			{users.filter((user) => user.isEating === true).length > 0 ? (
				<Link to='/orders'>
					<button className='btn'>Next</button>
				</Link>
			) : (
				<button className='btn no-click' onClick={noUsersAlert}>
					Next
				</button>
			)}
			{showAlert !== '' && (
				<h4 className='alert'>
					<RiErrorWarningLine className='error-symbol' />
					{showAlert}
				</h4>
			)}
		</div>
	);
};

export default Users;
