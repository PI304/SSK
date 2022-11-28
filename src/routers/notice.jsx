import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/header';
import Footer from '../component_layout/footer';

function Notice() {
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
	min-height: 100vh;
`;

export default Notice;
