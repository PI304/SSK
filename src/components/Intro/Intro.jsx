/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import IntroMain from './IntroMain';

function Intro() {
	return (
		<SLayoutContainer>
			<Header />

			<IntroMain />

			<Footer />
		</SLayoutContainer>
	);
}

const SLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
`;

export default Intro;
