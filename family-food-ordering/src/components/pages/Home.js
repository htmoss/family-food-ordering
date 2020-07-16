import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home'>
			<h1>Welcome</h1>
			<Link to='/users'>
				<button className='btn'>Begin</button>
			</Link>
		</div>
	);
};

export default Home;
