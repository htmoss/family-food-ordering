import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import SummaryItem from '../SummaryItem';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		x: '100vw',
	},
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.3,
			mass: 0.4,
			damping: 8,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
};

const Summary = () => {
	const { users } = useContext(UserContext);
	const [paidFor, setPaidFor] = useState(false);
	const [loaded, setLoaded] = useState(false);
	let paypalRef = useRef();

	// Total order sum amount
	const total = users
		.filter((user) => user.isEating === true)
		.reduce(
			(total, curr) =>
				total + curr.order.reduce((total, curr) => total + curr.price, 0),
			0
		);
	const tax = Math.round(total * 0.08 * 100) / 100;
	const final = total + tax;

	const product = {
		price: final,
		description: 'Your food',
	};

	useEffect(() => {
		// load paypal script
		const script = document.createElement('script');
		script.src =
			'https://www.paypal.com/sdk/js?client-id=AcmJrWjCb6fugj5KWwrC-LSUYRTo7AWsmfc_kF3WS5-x37ae59IJsFlpAaFpQ88XMiMWK_393_1fSKX9';
		script.addEventListener('load', () => setLoaded(true));
		document.body.appendChild(script);

		if (loaded) {
			setTimeout(() => {
				window.paypal
					.Buttons({
						createOrder: (data, actions) => {
							return actions.order.create({
								purchase_units: [
									{
										description: product.description,
										amount: {
											currency_code: 'USD',
											value: product.price,
										},
									},
								],
							});
						},
						onApprove: async (data, actions) => {
							const order = await actions.order.capture();

							setPaidFor(true);

							console.log(order);
						},
					})
					.render(paypalRef);
			});
		}
	});

	return (
		<div>
			<Link to='/orders'>
				<FaArrowLeft className='back-arrow' />
			</Link>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<h1>Summary</h1>
				<ul>
					{users
						.filter((user) => user.isEating === true)
						.map((user) => (
							<SummaryItem user={user} key={uuidv4()} />
						))}
				</ul>
				<div className='final-money'>
					<div className='final-item'>
						<h4>Total: </h4>
						<span>${total.toFixed(2)}</span>
					</div>
					<div className='final-item'>
						<h4>Added Tax: </h4>
						<span>${tax.toFixed(2)}</span>
					</div>
					<div className='final-item'>
						<h2>Final Total: </h2>
						<span>${final.toFixed(2)}</span>
					</div>
				</div>
				<p className='alert'>
					<RiErrorWarningLine className='error-symbol' />
					No need to use PayPal, you can move forward by pressing Submit below
				</p>
				<br />
				<div>
					{paidFor ? (
						<div>
							<h1>Congrats on ordering your food!</h1>
						</div>
					) : (
						<div>
							{/* <h1>
							{product.description} for ${product.price}
						</h1> */}
							<div ref={(v) => (paypalRef = v)} />
						</div>
					)}
				</div>

				{/* <Link to='/orders'>
				<button className='btn'>Back</button>
			</Link> */}

				<Link to='/complete'>
					<button className='btn'>Submit Order</button>
				</Link>
			</motion.div>
		</div>
	);
};

export default Summary;
