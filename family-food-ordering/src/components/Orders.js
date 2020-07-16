import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserOrder from './UserOrder';

const Orders = () => {
	const { users } = useContext(UserContext);
	return (
		<ul className='orders-list'>
			{users
				.filter((user) => user.isEating === true)
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((user) => (
					<UserOrder user={user} key={user.id} />
				))}
		</ul>
	);
};

export default Orders;
