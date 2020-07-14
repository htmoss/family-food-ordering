import React, { useContext } from 'react';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

const User = ({ user }) => {
	const { changeIsEating, deleteUser } = useContext(UserContext);
	return (
		<li>
			<div className='name'>{user.name}</div>
			<div className='is-eating-symbol'>
				{user.isEating ? (
					<FaCheck onClick={() => changeIsEating(user)} />
				) : (
					<FaTimes onClick={() => changeIsEating(user)} />
				)}
			</div>
			<div
				className='delete-button'
				onClick={() => {
					deleteUser(user.id);
				}}
			>
				<FaTrash />
			</div>
		</li>
	);
};

export default User;
