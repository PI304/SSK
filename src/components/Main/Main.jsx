import styled from 'styled-components';
import Colors from '../../constants/colors';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainSiteMap from './MainSite';

function Main() {
	return (
		<LayoutContainerCss>
			<Header />

			<main>
				<MainContainerCss>
					<MainThumnailCss>hi</MainThumnailCss>

					<MainCarouselCss>bye</MainCarouselCss>

					<MainSiteMap />
				</MainContainerCss>
			</main>

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

/* 메인 컨테이너 박스 CSS */

const MainContainerCss = styled.div`
	display: flex;
	flex-direction: column;
	width: 120rem;
	margin: auto;
`;

/* 썸네일 CSS */
const MainThumnailCss = styled.div`
	width: 120rem;
	height: 48rem;
`;

/* 캐러쉘 CSS */

const MainCarouselCss = styled.div`
	width: 110.4rem;
	height: 20rem;
`;

export default Main;
