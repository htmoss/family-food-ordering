import React from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
	return (
		<div className='completed'>
			<h1>Thank You!</h1>
			<h4>We will get started on your order straight away.</h4>
			<Link to='/'>
				<button className='btn'>Start Over</button>
			</Link>
		</div>
	);
};

export default Complete;
