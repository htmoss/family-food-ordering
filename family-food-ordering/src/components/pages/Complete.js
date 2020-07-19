import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Complete = () => {
	return (
		<motion.div
			className='completed'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<h1>Thank You!</h1>
			<h4>We will get started on your order straight away.</h4>
			<Link to='/'>
				<button className='btn'>Start Over</button>
			</Link>
		</motion.div>
	);
};

export default Complete;
