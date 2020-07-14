import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = () => {
	return (
		<div>
			<h1>MENU</h1>
			<ul>
				<MenuItem name='eggs' price={1.99} />
				<MenuItem name='bacon' price={2.99} />
				<MenuItem name='pancakes' price={3.99} />
			</ul>
		</div>
	);
};

export default MenuItems;
