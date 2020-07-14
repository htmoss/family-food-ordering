import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [users, setUsers] = useState([
		{
			name: 'Brad',
			isEating: true,
			order: [
				{ name: 'eggs', price: 1.99 },
				{ name: 'bacon', price: 2.99 },
			],
			prevOrder: [],
			id: uuidv4(),
		},
	]);
	const [userName, setUserName] = useState('');
	const [isEating, setIsEating] = useState(true);
	const [currEdit, setCurrEdit] = useState({});

	const addUser = (newUser) => {
		setUsers([...users, newUser]);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const changeIsEating = ({ name, isEating, id, order, prevOrder }) => {
		setUsers(
			[...users, { name, isEating: !isEating, order, prevOrder, id: uuidv4() }]
				.filter((user) => user.id !== id)
				.sort((a, b) => (a.name > b.name ? 1 : -1))
		);
	};

	const addFoodItem = (menuItem) => {
		setCurrEdit({
			name: currEdit.name,
			isEating: currEdit.isEating,
			id: currEdit.id,
			order: [...currEdit.order, menuItem],
		});
	};

	const updateCurrEdit = () => {
		// replacing the current instance of an order with a new one
		setUsers([...users.filter((user) => user.id !== currEdit.id), currEdit]);
	};

	return (
		<UserContext.Provider
			value={{
				users,
				setUsers,
				userName,
				setUserName,
				deleteUser,
				addUser,
				isEating,
				setIsEating,
				changeIsEating,
				currEdit,
				setCurrEdit,
				// alphabetize,
				addFoodItem,
				updateCurrEdit,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
