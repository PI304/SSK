import styled from 'styled-components';
import SLayoutContainer from '../component_layout/LayoutContainer';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainSlide from './MainSlide';
import MainCarousel from './MainCarousel_2';
import MainSite from './MainSite';

function Main() {
	return (
		<SLayoutContainer>
			<Header />

			<main>
				<SMainContainer>
					<MainSlide>hi</MainSlide>

					<MainCarousel />

					<MainSite />
				</SMainContainer>
			</main>

			<Footer />
		</SLayoutContainer>
	);
}

/* 메인 컨테이너 박스 CSS */

const SMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 120rem;
	margin: auto;
`;

export default Main;
