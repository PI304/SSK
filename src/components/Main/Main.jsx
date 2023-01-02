import styled from 'styled-components';
import MainSlide from './MainSlide';
import MainCarousel from './MainCarousel_3';
import MainSite from './MainSite';

function Main() {
	return (
		<main>
			<SMainContainer>
				<MainSlide />

				<MainCarousel />

				<MainSite />
			</SMainContainer>
		</main>
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
