import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Users from './components/pages/Users';
import Home from './components/pages/Home';
import UserContextProvider from './context/UserContext';
import OrdersPage from './components/pages/OrdersPage';
import Menu from './components/pages/Menu';

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
						<Route path='/orders'>
							<OrdersPage />
						</Route>
						<Route path='/menu'>
							<Menu />
						</Route>
					</Switch>
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
