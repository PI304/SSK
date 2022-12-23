import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import SLayoutContainer from './LayoutContainer';


function Layout() {
	return (
		<SLayoutContainer>
			<Header />
			<MainContainer>
				<Outlet/>
			</MainContainer>
			<Footer />
		</SLayoutContainer>
	);
}

export default Layout;