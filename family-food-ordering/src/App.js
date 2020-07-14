import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Users from './components/Users';
import Home from './components/Home';
import UserContextProvider from './context/UserContext';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<UserContextProvider>
					<Header />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/users'>
							<Users />
						</Route>
					</Switch>
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
