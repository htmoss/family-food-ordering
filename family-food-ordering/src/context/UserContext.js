import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [users, setUsers] = useState(() => {
		const localData = localStorage.getItem('users');
		return localData ? JSON.parse(localData) : [];
	});

	const [userName, setUserName] = useState('');
	const [isEating, setIsEating] = useState(true);
	const [currEdit, setCurrEdit] = useState({});

	const addUser = (newUser) => {
		setUsers([...users, newUser]);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const changeIsEating = ({ name, isEating, id, order, pic }) => {
		setUsers(
			[...users, { name, isEating: !isEating, order, pic, id: uuidv4() }]
				.filter((user) => user.id !== id)
				.sort((a, b) => (a.name > b.name ? 1 : -1))
		);
	};

	const addFoodItem = (menuItem) => {
		setCurrEdit({
			name: currEdit.name,
			isEating: currEdit.isEating,
			id: currEdit.id,
			pic: currEdit.pic,
			order: [...currEdit.order, menuItem],
		});
	};

	const updateCurrEdit = () => {
		// replacing the current instance of an order with a new one
		setUsers([...users.filter((user) => user.id !== currEdit.id), currEdit]);
	};

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users]);

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
				addFoodItem,
				updateCurrEdit,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
