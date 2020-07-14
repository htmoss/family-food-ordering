import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const OrderedItems = ({ food }) => {
	const { currEdit, setCurrEdit } = useContext(UserContext);
	const onClick = () => {
		const newCurr = {
			name: currEdit.name,
			isEating: currEdit.isEating,
			id: currEdit.id,
			order: currEdit.order.filter((item) => item.name !== food.name),
		};
		setCurrEdit(newCurr);
	};
	return (
		<div>
			<li key={uuidv4()}>{food.name}</li>
			<button onClick={onClick}>x</button>
		</div>
	);
};

export default OrderedItems;
