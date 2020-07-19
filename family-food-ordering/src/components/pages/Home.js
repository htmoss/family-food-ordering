import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<motion.div
			className='home'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h1>Welcome</h1>
			<Link to='/users'>
				<button className='btn'>Begin</button>
			</Link>
		</motion.div>
	);
};

export default Home;
