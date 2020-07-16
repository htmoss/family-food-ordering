import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';

const UserOrder = ({ user }) => {
	const { setCurrEdit } = useContext(UserContext);
	return (
		<li className='order'>
			<div className='pic-and-name'>
				<img src={`/img/${user.pic}.png`} alt='User' />
				<div className='name'>{user.name}</div>
			</div>
			<div>
				<ul className='current-order'>
					{user.order.length === 0 ? (
						<li key={uuidv4()}>No food yet</li>
					) : (
						user.order.map((food) => <li key={uuidv4()}>{food.name}</li>)
					)}
				</ul>
				{/* {user.order.length !== 0 && (
					<p className='user-order-total'>
						${user.order.reduce((total, curr) => total + curr.price, 0)}
					</p>
				)} */}
			</div>
			<Link to='/menu'>
				<button onClick={() => setCurrEdit(user)} className='btn edit'>
					Edit
				</button>
			</Link>
		</li>
	);
};

export default UserOrder;
