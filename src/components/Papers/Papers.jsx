import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';

function Papers() {
	return (
		<LayoutContainerCss>
			<Header />
			<h2>paper</h2>
			<main />

			<Footer />
		</LayoutContainerCss>
	);
}

const LayoutContainerCss = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
`;

export default Papers;