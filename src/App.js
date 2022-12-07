import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Intro from './components/Intro';
import Papers from './components/Papers';
import Contact from './components/Contact';
// eslint-disable-next-line import/no-named-as-default
import Research from './components/Research';
import Publication from './components/Publication';
import Reports from './components/Reports';
import FAQ from './components/FAQ';
import Members from './components/Members';
import Notice from './components/Notice';
import Resources from './components/Resources';
import Layout from './component_layout/Layout';
import reset from './styles/reset.module.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='components/Intro' element={<Intro />} />
				<Route path='components/Papers' element={<Papers />} />
				<Route path='components/Contact' element={<Contact />} />
				<Route path='components/Research' element={<Research />} />
				<Route path='components/Publication' element={<Publication />} />
				<Route path='components/Reports' element={<Reports />} />
				<Route path='components/FAQ' element={<FAQ />} />
				<Route path='components/Members' element={<Members />} />
				<Route path='components/Notice' element={<Notice />} />
				<Route path='components/Resources' element={<Resources />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
