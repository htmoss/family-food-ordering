import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { RiErrorWarningLine } from 'react-icons/ri';

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
		<div onClick={onClick} className='menu-item'>
			<h3>{name}</h3>
			{showAlert && (
				<h3 className='alert'>
					<RiErrorWarningLine className='error-symbol' />
					Food item is already in order
				</h3>
			)}
			<h3 className='price'>${price}</h3>
		</div>
	);
};

export default MenuItem;
