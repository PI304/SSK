import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routers/현석/main';
import Intro from './routers/현석/intro';
import Papers from './routers/현석/papers';
import Contact from './routers/현석/contact';
import Research from './routers/주현/research';
import Publication from './routers/주현/publication';
import Reports from './routers/주현/reports';
import FAQ from './routers/주현/FAQ';
import Members from './routers/현아/members';
import Notice from './routers/현아/notice';
import Resources from './routers/현아/resources';
import Layout from './component_layout/layout';
import reset from './styles/reset.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='intro' element={<Intro />} />
				<Route path='papers' element={<Papers />} />
				<Route path='contact' element={<Contact />} />
				<Route path='research' element={<Research />} />
				<Route path='publication' element={<Publication />} />
				<Route path='reports' element={<Reports />} />
				<Route path='FAQ' element={<FAQ />} />
				<Route path='members' element={<Members />} />
				<Route path='notice' element={<Notice />} />
				<Route path='resources' element={<Resources />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
