import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import IMG1 from '../../assets/handshake.svg';
import IMG2 from '../../assets/news.svg';
import IMG3 from '../../assets/document.svg';
import IMG4 from '../../assets/info.svg';

function Main() {
	return (
		<LayoutContainerCss>
			<Header />

			<MainContainerCss>
				<MainThumnailCss>hi</MainThumnailCss>

				<MainCarouselCss>bye</MainCarouselCss>

				<MainSiteMap />
			</MainContainerCss>

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

/* MainSiteMap */

function MainSiteMap() {
	return (
		<MainSiteMapCss>
			<MainSiteMapBoxCss>
				<MainSiteMapBackGroundCss1>
					<MainSiteMapGoToSiteCss1>
						<MainSiteMapGoToSiteFont1>ADDS소개</MainSiteMapGoToSiteFont1>
						<MainSiteMapGoToSiteSubFont1>
							ADDS소개
							<br />
							연구진소개
							<br />
							조사설계
						</MainSiteMapGoToSiteSubFont1>
					</MainSiteMapGoToSiteCss1>
					<MainSiteHover />
				</MainSiteMapBackGroundCss1>
			</MainSiteMapBoxCss>

			<MainSiteMapBoxCss>
				<MainSiteMapBackGroundCss2>
					<MainSiteMapGoToSiteCss2>
						<MainSiteMapGoToSiteFont2>발간물</MainSiteMapGoToSiteFont2>
						<MainSiteMapGoToSiteSubFont2>발간물</MainSiteMapGoToSiteSubFont2>
					</MainSiteMapGoToSiteCss2>
				</MainSiteMapBackGroundCss2>
			</MainSiteMapBoxCss>

			<MainSiteMapBoxCss>
				<MainSiteMapBackGroundCss3>
					<MainSiteMapGoToSiteCss3>
						<MainSiteMapGoToSiteFont3>데이터</MainSiteMapGoToSiteFont3>
						<MainSiteMapGoToSiteSubFont3>
							자료안내
							<br />
							데이터활용논문
						</MainSiteMapGoToSiteSubFont3>
					</MainSiteMapGoToSiteCss3>
				</MainSiteMapBackGroundCss3>
			</MainSiteMapBoxCss>

			<MainSiteMapBoxCss>
				<MainSiteMapBackGroundCss4>
					<MainSiteMapGoToSiteCss4>
						<MainSiteMapGoToSiteFont4>소통공간</MainSiteMapGoToSiteFont4>
						<MainSiteMapGoToSiteSubFont4>
							공지사항
							<br />
							보도자료
							<br />
							FAQ
							<br />
							contact
						</MainSiteMapGoToSiteSubFont4>
					</MainSiteMapGoToSiteCss4>
				</MainSiteMapBackGroundCss4>
			</MainSiteMapBoxCss>
		</MainSiteMapCss>
	);
}

/* 사이트맵 Box CSS */

const MainSiteMapCss = styled.div`
	display: flex;
	padding-bottom: 10rem;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const MainSiteMapBoxCss = styled.div`
	width: 27.7rem;
	height: 27.7rem;
`;

/* 사이트맵1 CSS */

const MainSiteMapBackGroundCss1 = styled.div`
	background-image: url(${IMG1});
	background-size: 42%;
	background-repeat: no-repeat;
	background-position: 1.6rem 14.8rem;
	transform: scaleX(-1);
	width: 27.7rem;
	height: 27.7rem;
	background-color: ${Colors.blue4};
	&: hover .mainSiteHover {
		display: block;
		position: relative;
	}
`;

const MainSiteMapGoToSiteCss1 = styled.div`
	padding: 16%;
	transform: scaleX(-1);
	line-height: 3.5rem;
`;

const MainSiteMapGoToSiteFont1 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const MainSiteMapGoToSiteSubFont1 = styled.div`
	font-size: 1.7rem;
	line-height: 2.5rem;
`;

/* Hover */

function MainSiteHover() {
	return (
		<MainSiteHoverContainer className='mainSiteHover'>
			<MainSiteHoverCss>
				<MainSiteHoverLiCss>
					<MainSiteSubHoverCss to='../components/Intro'>ADDS소개</MainSiteSubHoverCss>
				</MainSiteHoverLiCss>
				<MainSiteHoverLiCss>
					<MainSiteSubHoverCss to='../components/Members'>연구진소개</MainSiteSubHoverCss>
				</MainSiteHoverLiCss>
				<MainSiteHoverLiCss>
					<MainSiteSubHoverCss to='../components/Research'>조사설계</MainSiteSubHoverCss>
				</MainSiteHoverLiCss>
			</MainSiteHoverCss>
		</MainSiteHoverContainer>
	);
}
const MainSiteHoverContainer = styled.div`
	display: none;
	position: absolute;
	bottom: 20.2rem;
`;

const MainSiteHoverCss = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
	transform: scaleX(-1);
`;

const MainSiteHoverLiCss = styled.li`
	height: 9.23rem;
	text-align: center;
	font-size: 1.5rem;
`;

const MainSiteSubHoverCss = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 9.23rem;
	font-size: 1.5rem;
	background: ${Colors.white};
	&: hover {
		background: ${Colors.blue_hover};
	}
`;

/* 사이트맵2 CSS */

const MainSiteMapBackGroundCss2 = styled.div`
	background-image: url(${IMG2});
	background-size: 45%;
	background-repeat: no-repeat;
	background-position: 14rem 14.8rem;
	width: 27.7rem;
	height: 27.7rem;
	background-color: #e2edfb;
`;

const MainSiteMapGoToSiteCss2 = styled.div`
	padding: 16%;
	line-height: 3rem;
`;

const MainSiteMapGoToSiteFont2 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const MainSiteMapGoToSiteSubFont2 = styled.div`
	font-size: 1.7rem;
`;

/* 사이트맵3 CSS */

const MainSiteMapBackGroundCss3 = styled.div`
	background-image: url(${IMG3});
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: 16rem 15.5rem;
	width: 27.7rem;
	height: 27.7rem;
	background-color: #e2edfb;
`;

const MainSiteMapGoToSiteCss3 = styled.div`
	padding: 16%;
	line-height: 3rem;
`;

const MainSiteMapGoToSiteFont3 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const MainSiteMapGoToSiteSubFont3 = styled.div`
	font-size: 1.7rem;
	line-height: 1.5;
`;

/* 사이트맵4 CSS */

const MainSiteMapBackGroundCss4 = styled.div`
	background-image: url(${IMG4});
	background-size: 43%;
	background-repeat: no-repeat;
	background-position: 15rem 15.2rem;
	width: 27.7rem;
	height: 27.7rem;
	background-color: #e2edfb;
`;

const MainSiteMapGoToSiteCss4 = styled.div`
	padding: 16%;
`;

const MainSiteMapGoToSiteFont4 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const MainSiteMapGoToSiteSubFont4 = styled.div`
	font-size: 1.7rem;
	line-height: 1.5;
`;

export default Main;
