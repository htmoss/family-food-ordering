import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = () => {
	return (
		<div className='menu-items'>
			<h1>Menu</h1>
			<ul>
				<MenuItem name='eggs' price={1.99} className='menu-item' />
				<MenuItem name='bacon' price={2.99} />
				<MenuItem name='pancakes' price={3.99} />
				<MenuItem name='coffee' price={1.99} />
			</ul>
		</div>
	);
};

export default MenuItems;
