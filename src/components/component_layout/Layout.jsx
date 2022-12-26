import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SLayoutContainer from './LayoutContainer';


function Layout() {
	return (
		<SLayoutContainer>
			<Header />
				<Outlet/>
			<Footer />
		</SLayoutContainer>
	);
}

export default Layout;