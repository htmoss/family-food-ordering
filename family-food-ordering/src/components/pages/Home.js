import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to='/users'>
				<button>Begin Pickup Order</button>
			</Link>
		</div>
	);
};

export default Home;
