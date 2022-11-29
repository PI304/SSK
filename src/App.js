import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './routers/현석/main';
import Layout from './component_layout/layout';
import reset from './styles/reset.module.css';

function App() {
	return (
		<Router>
			<Main />
		</Router>
	);
}

export default App;
