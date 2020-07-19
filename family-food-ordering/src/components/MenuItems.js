import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = () => {
	return (
		<div>
			<h1>Menu</h1>
			<u className='menu-items'>
				<MenuItem name='eggs' price={1.99} img='eggs' />
				<MenuItem name='bacon' price={2.99} img='bacon' />
				<MenuItem name='stack of pancakes' price={3.99} img='pancakes' />
				<MenuItem name='stack of waffles' price={3.99} img='waffles' />
				<MenuItem name='coffee' price={1.99} img='coffee' />
				<MenuItem name='tea' price={1.99} img='tea' />
				<MenuItem name='cereal' price={1.99} img='cereal' />
			</u>
		</div>
	);
};

export default MenuItems;
