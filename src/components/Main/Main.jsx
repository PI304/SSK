import styled from 'styled-components';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainSlide from './MainSlide';
import MainSite from './MainSite';

function Main() {
	return (
		<SLayoutContainer>
			<Header />

			<main>
				<SMainContainer>
					<MainSlide>hi</MainSlide>

					<MainCarouselCss>bye</MainCarouselCss>

					<MainSite />
				</SMainContainer>
			</main>

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

/* 메인 컨테이너 박스 CSS */

const SMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 120rem;
	margin: auto;
`;

/* 캐러쉘 CSS */

const MainCarouselCss = styled.div`
	width: 110.4rem;
	height: 20rem;
`;

export default Main;
