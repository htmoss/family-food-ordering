import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Orders from '../Orders';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const OrdersPage = () => {
	const { users } = useContext(UserContext);
	const [showAlert, setShowAlert] = useState(false);

	const notEveryoneAlert = () => {
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	};
	return (
		<div>
			<h1>Orders</h1>
			<Orders />
			<Link to='/users'>
				<button className='btn'>Back</button>
			</Link>
			{users.filter((user) => user.order.length > 0).length === users.length ? (
				<Link to='/'>
					<button className='btn'>Complete Order</button>
				</Link>
			) : (
				<button className='btn no-click' onClick={notEveryoneAlert}>
					Complete Order
				</button>
			)}
			{showAlert && (
				<h4 className='alert'>Not everyone in your list has ordered food.</h4>
			)}
		</div>
	);
};

export default OrdersPage;
