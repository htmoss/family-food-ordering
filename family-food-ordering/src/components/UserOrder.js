import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';

const UserOrder = ({ user }) => {
	const { setCurrEdit } = useContext(UserContext);
	return (
		<li>
			<div className='name'>{user.name}</div>
			<ul className='current-order'>
				{user.order.length === 0 ? (
					<li key={uuidv4()}>No food yet</li>
				) : (
					user.order.map((food) => <li key={uuidv4()}>{food.name}</li>)
				)}
			</ul>
			<Link to='/menu'>
				<button onClick={() => setCurrEdit(user)}>Edit Order</button>
			</Link>
		</li>
	);
};

export default UserOrder;
