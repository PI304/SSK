import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routers/현석/main';
import Intro from './routers/현석/intro';
import Papers from './routers/현석/papers';
import Contact from './routers/현석/contact';
import Research from './routers/주현/Research';
import Publication from './routers/주현/Publication';
import Reports from './routers/주현/Reports';
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
				<Route path='routers/현석/intro' element={<Intro />} />
				<Route path='routers/현석/papers' element={<Papers />} />
				<Route path='routers/현석/contact' element={<Contact />} />
				<Route path='routers/주현/Research' element={<Research />} />
				<Route path='routers/주현/Publication' element={<Publication />} />
				<Route path='routers/주현/Reports' element={<Reports />} />
				<Route path='routers/주현/FAQ' element={<FAQ />} />
				<Route path='routers/현아/members' element={<Members />} />
				<Route path='routers/현아/notice' element={<Notice />} />
				<Route path='routers/현아/resources' element={<Resources />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
