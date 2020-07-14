import React from 'react';
import { Link } from 'react-router-dom';
// import User from '../User';
import Orders from '../Orders';

const OrdersPage = () => {
	return (
		<div>
			<h1>Orders</h1>
			<Orders />
			<Link to='/users'>
				<button className='btn'>Back</button>
			</Link>
			<Link to='/'>
				<button className='btn'>Complete Order</button>
			</Link>
		</div>
	);
};

export default OrdersPage;
