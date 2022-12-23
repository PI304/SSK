import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import Papers from './components/Papers/Papers';
import Contact from './components/Contact/Contact';
// eslint-disable-next-line import/no-named-as-default
import Research from './components/Research/Research';
import Publication from './components/Publication/Publication';
import Reports from './components/Reports/Reports';
import FAQ from './components/FAQ/FAQ';
import Members from './components/Members/Members';
import Notice from './components/Notice/Notice';
import Resources from './components/Resources/Resources';
import Layout from './components/component_layout/Layout';
import './styles/reset.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/Intro' element={<Intro />} />
				<Route path='/Papers' element={<Papers />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/Research' element={<Research />} />
				<Route path='/Publication' element={<Publication />} />
				<Route path='/Reports' element={<Reports />} />
				<Route path='/FAQ' element={<FAQ />} />
				<Route path='/Members' element={<Members />} />
				<Route path='/Notice' element={<Notice />} />
				<Route path='/Resources' element={<Resources />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
