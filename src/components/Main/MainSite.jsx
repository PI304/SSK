import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG1 from '../../assets/handshake.svg';
import IMG2 from '../../assets/news.svg';
import IMG3 from '../../assets/document.svg';
import IMG4 from '../../assets/info.svg';

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
					<MainSiteHover2 />
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
					<MainSiteHover3 />
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
					<MainSiteHover4 />
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
		background-color: ${Colors.white};
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
	&: hover .mainSiteHover {
		display: block;
		position: relative;
		background-color: ${Colors.white};
	}
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

/* Hover */

function MainSiteHover2() {
	return (
		<MainSiteHoverContainer2 className='mainSiteHover'>
			<MainSiteHoverCss2>
				<MainSiteHoverLiCss2>
					<MainSiteSubHoverCss2 to='../components/Intro'>발간물</MainSiteSubHoverCss2>
				</MainSiteHoverLiCss2>
			</MainSiteHoverCss2>
		</MainSiteHoverContainer2>
	);
}

const MainSiteHoverContainer2 = styled.div`
	display: none;
	position: absolute;
	bottom: 15.2rem;
`;

const MainSiteHoverCss2 = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const MainSiteHoverLiCss2 = styled.li`
	height: 27.7rem;
	text-align: center;
	font-size: 1.5rem;
`;

const MainSiteSubHoverCss2 = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 27.7rem;
	font-size: 1.5rem;
	&: hover {
		background: ${Colors.blue_hover};
	}
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
	&: hover .mainSiteHover {
		display: block;
		position: relative;
		background-color: ${Colors.white};
	}
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

function MainSiteHover3() {
	return (
		<MainSiteHoverContainer3 className='mainSiteHover'>
			<MainSiteHoverCss3>
				<MainSiteHoverLiCss3>
					<MainSiteSubHoverCss3 to='../components/Intro'>자료안내</MainSiteSubHoverCss3>
				</MainSiteHoverLiCss3>
				<MainSiteHoverLiCss3>
					<MainSiteSubHoverCss3 to='../components/Intro'>데이터활용논문</MainSiteSubHoverCss3>
				</MainSiteHoverLiCss3>
			</MainSiteHoverCss3>
		</MainSiteHoverContainer3>
	);
}

const MainSiteHoverContainer3 = styled.div`
	display: none;
	position: absolute;
	bottom: 17.3rem;
`;

const MainSiteHoverCss3 = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const MainSiteHoverLiCss3 = styled.li`
	height: 13.85rem;
	text-align: center;
	font-size: 1.5rem;
`;

const MainSiteSubHoverCss3 = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 13.85rem;
	font-size: 1.5rem;
	&: hover {
		background: ${Colors.blue_hover};
	}
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
	&: hover .mainSiteHover {
		display: block;
		position: relative;
		background-color: ${Colors.white};
	}
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

function MainSiteHover4() {
	return (
		<MainSiteHoverContainer4 className='mainSiteHover'>
			<MainSiteHoverCss4>
				<MainSiteHoverLiCss4>
					<MainSiteSubHoverCss4 to='../components/Intro'>공지사항</MainSiteSubHoverCss4>
				</MainSiteHoverLiCss4>
				<MainSiteHoverLiCss4>
					<MainSiteSubHoverCss4 to='../components/Intro'>보도자료</MainSiteSubHoverCss4>
				</MainSiteHoverLiCss4>
				<MainSiteHoverLiCss4>
					<MainSiteSubHoverCss4 to='../components/Intro'>FAQ</MainSiteSubHoverCss4>
				</MainSiteHoverLiCss4>
				<MainSiteHoverLiCss4>
					<MainSiteSubHoverCss4 to='../components/Intro'>contact</MainSiteSubHoverCss4>
				</MainSiteHoverLiCss4>
			</MainSiteHoverCss4>
		</MainSiteHoverContainer4>
	);
}

const MainSiteHoverContainer4 = styled.div`
	display: none;
	position: absolute;
	bottom: 21.7rem;
`;

const MainSiteHoverCss4 = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const MainSiteHoverLiCss4 = styled.li`
	height: 6.925rem;
	text-align: center;
	font-size: 1.5rem;
`;

const MainSiteSubHoverCss4 = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 6.925rem;
	font-size: 1.5rem;
	&: hover {
		background: ${Colors.blue_hover};
	}
`;

export default MainSiteMap;
