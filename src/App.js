import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routers/현석/main';
import Research from './routers/주현/research';
import Layout from './component_layout/layout';
import reset from './styles/reset.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='research' element={<Research />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
