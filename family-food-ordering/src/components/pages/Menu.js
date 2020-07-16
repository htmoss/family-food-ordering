import React, { useContext } from 'react';
import MenuItems from '../MenuItems';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../context/UserContext';
import OrderedItems from '../OrderedItems';
import { FaArrowLeft } from 'react-icons/fa';

const Menu = () => {
	const { currEdit, updateCurrEdit } = useContext(UserContext);
	return (
		<div className='menu'>
			<Link to='/orders'>
				<FaArrowLeft className='back-arrow' />
			</Link>
			<div className='name-and-order'>
				<div className='pic-and-name'>
					<img src={`/img/${currEdit.pic}.png`} alt='User' />
					<div className='name'>{currEdit.name}</div>
				</div>
				<div className='order-and-total'>
					<ul className='current-order'>
						{/* checks and see if they already have any orders in their list */}
						{currEdit.order && currEdit.order.length === 0 ? (
							<li key={uuidv4()}>No food yet</li>
						) : (
							currEdit.order.map((food) => (
								<OrderedItems food={food} key={uuidv4()} />
							))
						)}
					</ul>
					{currEdit.order.length !== 0 && (
						<p className='user-order-total'>
							${currEdit.order.reduce((total, curr) => total + curr.price, 0)}
						</p>
					)}
				</div>
			</div>
			<MenuItems />
			<Link to='/orders'>
				<button className='btn' onClick={updateCurrEdit}>
					Save
				</button>
			</Link>
		</div>
	);
};

export default Menu;
