import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const SummaryItem = ({ user }) => {
	const { name, order } = user;
	return (
		<div className='sum-item'>
			<h3 className='name'>{name}</h3>
			<ul>
				{order.map((foodItem) => (
					<li key={uuidv4()}>
						<p>{foodItem.name}</p>
						<p className='price'>{foodItem.price}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SummaryItem;
