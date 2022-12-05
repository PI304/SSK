import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routers/현석/Main';
import Intro from './routers/현석/Intro';
import Papers from './routers/현석/Papers';
import Contact from './routers/현석/Contact';
// eslint-disable-next-line import/no-named-as-default
import Research from './routers/주현/Research';
import Publication from './routers/주현/Publication';
import Reports from './routers/주현/Reports';
import FAQ from './routers/주현/FAQ';
import Members from './routers/현아/Members';
import Notice from './routers/현아/Notice';
import Resources from './routers/현아/Resources';
import Layout from './component_layout/Layout';
import reset from './styles/reset.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='routers/현석/Intro' element={<Intro />} />
				<Route path='routers/현석/Papers' element={<Papers />} />
				<Route path='routers/현석/Contact' element={<Contact />} />
				<Route path='routers/주현/Research' element={<Research />} />
				<Route path='routers/주현/Publication' element={<Publication />} />
				<Route path='routers/주현/Reports' element={<Reports />} />
				<Route path='routers/주현/FAQ' element={<FAQ />} />
				<Route path='routers/현아/Members' element={<Members />} />
				<Route path='routers/현아/Notice' element={<Notice />} />
				<Route path='routers/현아/Resources' element={<Resources />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
