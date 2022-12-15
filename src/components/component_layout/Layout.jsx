import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function Layout() {
	return (
		<LayoutContainer>
			<Header />

			<main />

			<Footer />
		</LayoutContainer>
	);
}

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
`;
export default Layout;
