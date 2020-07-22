import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { FaTimes } from 'react-icons/fa';
const OrderedItems = ({ food }) => {
	const { currEdit, setCurrEdit } = useContext(UserContext);
	const onClick = () => {
		const index = currEdit.order.findIndex((item) => item.name === food.name);
		console.log(index);
		if (index !== -1) {
			const newOrder = currEdit.order
				.slice(0, index)
				.concat(currEdit.order.slice(index + 1));
			const newCurr = {
				name: currEdit.name,
				isEating: currEdit.isEating,
				id: currEdit.id,
				pic: currEdit.pic,
				order: newOrder,
			};
			setCurrEdit(newCurr);
		}
	};
	return (
		<div>
			<li key={uuidv4()} className='ordered-item'>
				<FaTimes className='delete-button' onClick={onClick} />
				<p className='name'>{food.name}</p>
				{`$${food.price}`}
			</li>
		</div>
	);
};

export default OrderedItems;
