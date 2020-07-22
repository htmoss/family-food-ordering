import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdInvertColors } from 'react-icons/md';
import { UserContext } from '../context/UserContext';
import { v4 as uuidv4 } from 'uuid';

const User = ({ user }) => {
	const { changeIsEating, deleteUser, setUsers, users } = useContext(
		UserContext
	);
	const { id } = user;

	const changeColor = () => {
		let newPic = '';
		user.pic.endsWith('7')
			? (newPic = user.pic.slice(0, 2).concat('1'))
			: (newPic = (parseFloat(user.pic) + 0.1).toFixed(1).toString());

		console.log(newPic);

		const newUser = {
			name: user.name,
			isEating: user.isEating,
			id: uuidv4(),
			pic: newPic,
			order: user.order,
		};

		setUsers(
			[...users, newUser]
				.filter((user) => user.id !== id)
				.sort((a, b) => (a.name > b.name ? 1 : -1))
		);
	};

	return (
		<li className='user'>
			<FaTimes
				className='delete-button'
				onClick={() => {
					deleteUser(user.id);
				}}
			/>

			<div
				className={`user-bg is-eating-${user.isEating}`}
				onClick={() => changeIsEating(user)}
			>
				<img src={`/img/users/${user.pic}.png`} alt='User' />
			</div>
			<div className='name'>
				{user.name}
				<MdInvertColors id='color-button' onClick={changeColor} />
			</div>
		</li>
	);
};

export default User;
