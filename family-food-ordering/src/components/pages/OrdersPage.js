import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Orders from '../Orders';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { FaArrowLeft } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';

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
			<Link to='/users'>
				<FaArrowLeft className='back-arrow' />
			</Link>
			<h1>Orders</h1>
			<Orders />

			{/* Check to see if everyone has food  */}
			{users.filter((user) => user.order.length > 0).length === users.length ? (
				<Link to='/summary'>
					<button className='btn'>Complete Order</button>
				</Link>
			) : (
				<button className='btn no-click' onClick={notEveryoneAlert}>
					Complete Order
				</button>
			)}
			{showAlert && (
				<h4 className='alert'>
					<RiErrorWarningLine className='error-symbol' />
					Not everyone in your list has ordered food.
				</h4>
			)}
		</div>
	);
};

export default OrdersPage;
