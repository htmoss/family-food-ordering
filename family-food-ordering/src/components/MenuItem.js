import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const MenuItem = (menuItem) => {
	const { name, price } = menuItem;
	const { addFoodItem, currEdit } = useContext(UserContext);
	const [showAlert, setShowAlert] = useState(false);

	const onClick = () => {
		currEdit.order.find((item) => item.name === name) === undefined
			? addFoodItem(menuItem)
			: duplicateAlert();
	};

	const duplicateAlert = () => {
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	};

	return (
		<div onClick={onClick}>
			{showAlert && <h4 className='alert'>Food item is already in order</h4>}
			<h4>{name}</h4>
			<h5>{price}</h5>
		</div>
	);
};

export default MenuItem;
