import React, { useContext } from 'react';
import MenuItems from '../MenuItems';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../context/UserContext';

const Menu = () => {
	const { currEdit, updateCurrEdit } = useContext(UserContext);
	return (
		<div>
			<h1>{currEdit.name}</h1>
			<ul className='current-order'>
				{/* checks and see if they already have any orders in their list */}
				{currEdit.order && currEdit.order.length === 0 ? (
					<li key={uuidv4()}>No food yet</li>
				) : (
					currEdit.order.map((food) => <li key={uuidv4()}>{food.name}</li>)
				)}
			</ul>
			<MenuItems />
			<Link to='/orders'>
				<button className='btn'>Cancel</button>
				<button className='btn' onClick={updateCurrEdit}>
					Save
				</button>
			</Link>
		</div>
	);
};

export default Menu;
