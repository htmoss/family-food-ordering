import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Users from './components/pages/Users';
import Home from './components/pages/Home';
import UserContextProvider from './context/UserContext';
import OrdersPage from './components/pages/OrdersPage';
import Menu from './components/pages/Menu';
import Complete from './components/pages/Complete';
import Summary from './components/pages/Summary';

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
						<Route path='/summary'>
							<Summary />
						</Route>
						<Route path='/complete'>
							<Complete />
						</Route>
					</Switch>
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
