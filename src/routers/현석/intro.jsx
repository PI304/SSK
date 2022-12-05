/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import Header from '../../component_layout/header';
import Footer from '../../component_layout/footer';

function Intro() {
	return (
		<LayoutContainerCss>
			<Header />
			<h2>intro</h2>
			<main>Intro</main>

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

export default Intro;
