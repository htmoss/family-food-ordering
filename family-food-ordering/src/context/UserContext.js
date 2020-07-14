import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [users, setUsers] = useState([]);
	const [userName, setUserName] = useState('');

	return (
		<UserContext.Provider
			value={{
				users,
				setUsers,
				userName,
				setUserName,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
