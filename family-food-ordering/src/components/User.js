import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

const User = ({ user }) => {
	const { changeIsEating, deleteUser } = useContext(UserContext);
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
				<img src={`/img/${user.pic}.png`} alt='User' />
			</div>
			<div className='name'>{user.name}</div>
		</li>
	);
};

export default User;
