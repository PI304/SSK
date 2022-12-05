/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import Header from '../../component_layout/Header';
import Footer from '../../component_layout/Footer';

function Resources() {
	return (
		<LayoutContainerCss>
			<Header />
			<h2>resources</h2>
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

export default Resources;
