import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

function Layout() {
	return (
		<LayoutContainerCss>
			<Header />

			<main />

			<Footer />
		</LayoutContainerCss>
	);
}

const LayoutContainerCss = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;
export default Layout;
