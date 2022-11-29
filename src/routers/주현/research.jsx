import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../../component_layout/header';
import Footer from '../../component_layout/footer';

function Research() {
	return (
		<LayoutContainerCss>
			<Header />
			<h2>research</h2>
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

export default Research;
