import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const MenuItems = () => {
	const { updateCurrEdit } = useContext(UserContext);
	return (
		<div className='title-menu-items'>
			<h1>Menu</h1>
			<ul className='menu-items'>
				<MenuItem name='eggs' price={1.99} img='eggs' />
				<MenuItem name='bacon' price={2.99} img='bacon' />
				<MenuItem name='pancakes' price={3.99} img='pancakes' />
				<MenuItem name='waffles' price={3.99} img='waffles' />
				<MenuItem name='coffee' price={1.99} img='coffee' />
				<MenuItem name='tea' price={1.99} img='tea' />
				<MenuItem name='cereal' price={1.99} img='cereal' />
			</ul>
			<Link to='/orders'>
				<button className='btn' onClick={updateCurrEdit}>
					Save
				</button>
			</Link>
		</div>
	);
};

export default MenuItems;
