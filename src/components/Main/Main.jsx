import styled from 'styled-components';
import SLayoutContainer from '../component_layout/LayoutContainer';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainSlide from './MainSlide';
import MainSite from './MainSite';
import MainSite2 from './MainSite2';

function Main() {
	return (
		<SLayoutContainer>
			<Header />

			<main>
				<SMainContainer>
					<MainSlide>hi</MainSlide>

					<MainCarouselCss>bye</MainCarouselCss>

					<MainSite2 />
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

/* 캐러쉘 CSS */

const MainCarouselCss = styled.div`
	width: 110.4rem;
	height: 20rem;
`;

export default Main;
