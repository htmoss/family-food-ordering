import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
	return (
		<div>
			<h1>Orders</h1>
			<Link to='/users'>
				<button className='btn'>Back</button>
			</Link>
			<Link to='/'>
				<button className='btn'>Next</button>
			</Link>
		</div>
	);
};

export default Orders;
