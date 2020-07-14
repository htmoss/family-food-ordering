import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [users, setUsers] = useState([]);
	const [userName, setUserName] = useState('');
	const [isEating, setIsEating] = useState(true);

	const addUser = (newUser) => {
		setUsers([...users, newUser]);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const changeIsEating = ({ name, isEating, id }) => {
		console.log({ name, isEating, id });
		setUsers(
			[...users, { name, isEating: !isEating, id: uuidv4() }].filter(
				(user) => user.id !== id
			)
		);
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
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
