import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './component_layout/layout';
import styles from './styles/reset.module.css';

function App() {
	return (
		<Router>
			<Layout />
		</Router>
	);
}

export default App;
