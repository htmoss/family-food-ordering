import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';
import { FaEdit } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

const UserOrder = ({ user }) => {
	const { setCurrEdit } = useContext(UserContext);
	return (
		<li className='order'>
			<Link to='/menu'>
				<FaEdit onClick={() => setCurrEdit(user)} className='btn edit'>
					Edit
				</FaEdit>
			</Link>
			<Link to='/menu' style={{ textDecoration: 'none', color: '#fff' }}>
				<div onClick={() => setCurrEdit(user)} className='pic-and-name'>
					<img src={`/img/users/${user.pic}.png`} alt='User' />
					<div className='name'>{user.name}</div>
				</div>
			</Link>
			<div>
				{/* List out current order */}
				<ul className='current-order'>
					{user.order.length === 0 ? (
						<li key={uuidv4()}>No food yet</li>
					) : (
						user.order
							.slice(0, 4)
							.map((food) => <li key={uuidv4()}>{food.name}</li>)
					)}
					{user.order.length > 4 && (
						<li>
							<FiMoreHorizontal />
						</li>
					)}
				</ul>
				{/* {user.order.length !== 0 && (
					<p className='user-order-total'>
						${user.order.reduce((total, curr) => total + curr.price, 0)}
					</p>
				)} */}
			</div>
		</li>
	);
};

export default UserOrder;
