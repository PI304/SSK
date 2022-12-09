import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG1 from '../../assets/handshake.svg';
import IMG2 from '../../assets/news.svg';
import IMG3 from '../../assets/document.svg';
import IMG4 from '../../assets/info.svg';

function MainSite() {
	return (
		<SMainSiteMapContainer>
			<SSiteMapD>
				<SSiteMapBackGroundD1>
					<SSiteMapGoToSiteD1>
						<SSiteMapGoToSiteFontD1>ADDS소개</SSiteMapGoToSiteFontD1>
						<SSiteMapGoToSiteSubFontD1>
							ADDS소개
							<br />
							연구진소개
							<br />
							조사설계
						</SSiteMapGoToSiteSubFontD1>
					</SSiteMapGoToSiteD1>
					<CMainSiteHover />
				</SSiteMapBackGroundD1>
			</SSiteMapD>

			<SSiteMapD>
				<SSiteMapBackGroundD2>
					<SSiteMapGoToSiteD2>
						<SSiteMapGoToSiteFontD2>발간물</SSiteMapGoToSiteFontD2>
						<SSiteMapGoToSiteSubFontD2>발간물</SSiteMapGoToSiteSubFontD2>
					</SSiteMapGoToSiteD2>
					<CMainSiteHover2 />
				</SSiteMapBackGroundD2>
			</SSiteMapD>

			<SSiteMapD>
				<SSiteMapBackGroundD3>
					<SSiteMapGoToSiteD3>
						<SSiteMapGoToSiteFontD3>데이터</SSiteMapGoToSiteFontD3>
						<SSiteMapGoToSiteSubFontD3>
							자료안내
							<br />
							데이터활용논문
						</SSiteMapGoToSiteSubFontD3>
					</SSiteMapGoToSiteD3>
					<CMainSiteHover3 />
				</SSiteMapBackGroundD3>
			</SSiteMapD>

			<SSiteMapD>
				<SSiteMapBackGroundD4>
					<SSiteMapGoToSiteD4>
						<SSiteMapGoToSiteFontD4>소통공간</SSiteMapGoToSiteFontD4>
						<SSiteMapGoToSiteSubFontD4>
							공지사항
							<br />
							보도자료
							<br />
							FAQ
							<br />
							contact
						</SSiteMapGoToSiteSubFontD4>
					</SSiteMapGoToSiteD4>
					<CMainSiteHover4 />
				</SSiteMapBackGroundD4>
			</SSiteMapD>
		</SMainSiteMapContainer>
	);
}

/* 사이트맵 Box CSS */

const SMainSiteMapContainer = styled.div`
	display: flex;
	padding-bottom: 10rem;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const SSiteMapD = styled.div`
	width: 27.7rem;
	height: 27.7rem;
`;

/* 사이트맵1 CSS */

const SSiteMapBackGroundD1 = styled.div`
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

const SSiteMapGoToSiteD1 = styled.div`
	padding: 16%;
	transform: scaleX(-1);
	line-height: 3.5rem;
`;

const SSiteMapGoToSiteFontD1 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const SSiteMapGoToSiteSubFontD1 = styled.div`
	font-size: 1.7rem;
	line-height: 2.5rem;
`;

/* Hover */

function CMainSiteHover() {
	return (
		<SSiteHoverContainer className='mainSiteHover'>
			<SSiteHoverU>
				<SSiteHoverL>
					<SSiteSubHoverA to='../components/Intro'>ADDS소개</SSiteSubHoverA>
				</SSiteHoverL>
				<SSiteHoverL>
					<SSiteSubHoverA to='../components/Members'>연구진소개</SSiteSubHoverA>
				</SSiteHoverL>
				<SSiteHoverL>
					<SSiteSubHoverA to='../components/Research'>조사설계</SSiteSubHoverA>
				</SSiteHoverL>
			</SSiteHoverU>
		</SSiteHoverContainer>
	);
}
const SSiteHoverContainer = styled.div`
	display: none;
	position: absolute;
	bottom: 20.2rem;
`;

const SSiteHoverU = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
	transform: scaleX(-1);
`;

const SSiteHoverL = styled.li`
	height: 9.23rem;
	text-align: center;
`;

const SSiteSubHoverA = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 9.23rem;
	font-size: 1.7rem;
	&: hover {
		background: ${Colors.blue_hover};
        transition: all 0.5s;
	}
`;

/* 사이트맵2 CSS */

const SSiteMapBackGroundD2 = styled.div`
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

const SSiteMapGoToSiteD2 = styled.div`
	padding: 16%;
	line-height: 3rem;
`;

const SSiteMapGoToSiteFontD2 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const SSiteMapGoToSiteSubFontD2 = styled.div`
	font-size: 1.7rem;
`;

/* Hover */

function CMainSiteHover2() {
	return (
		<SSiteHoverContainer2 className='mainSiteHover'>
			<SSiteHoverU2>
				<SSiteHoverL2>
					<SSiteSubHoverA2 to='../components/Intro'>발간물</SSiteSubHoverA2>
				</SSiteHoverL2>
			</SSiteHoverU2>
		</SSiteHoverContainer2>
	);
}

const SSiteHoverContainer2 = styled.div`
	display: none;
	position: absolute;
	bottom: 15.2rem;
`;

const SSiteHoverU2 = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const SSiteHoverL2 = styled.li`
	height: 27.7rem;
	text-align: center;
`;

const SSiteSubHoverA2 = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 27.7rem;
	font-size: 1.7rem;
	&: hover {
		background: ${Colors.blue_hover};
        transition: all 0.5s;
	}
`;

/* 사이트맵3 CSS */

const SSiteMapBackGroundD3 = styled.div`
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

const SSiteMapGoToSiteD3 = styled.div`
	padding: 16%;
	line-height: 3rem;
`;

const SSiteMapGoToSiteFontD3 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const SSiteMapGoToSiteSubFontD3 = styled.div`
	font-size: 1.7rem;
	line-height: 1.5;
`;

function CMainSiteHover3() {
	return (
		<SSiteHoverContainer3 className='mainSiteHover'>
			<SSiteHoverU3>
				<SSiteHoverL3>
					<SSiteSubHoverA3 to='../components/Intro'>자료안내</SSiteSubHoverA3>
				</SSiteHoverL3>
				<SSiteHoverL3>
					<SSiteSubHoverA3 to='../components/Intro'>데이터활용논문</SSiteSubHoverA3>
				</SSiteHoverL3>
			</SSiteHoverU3>
		</SSiteHoverContainer3>
	);
}

const SSiteHoverContainer3 = styled.div`
	display: none;
	position: absolute;
	bottom: 17.3rem;
`;

const SSiteHoverU3 = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const SSiteHoverL3 = styled.li`
	height: 13.85rem;
	text-align: center;
`;

const SSiteSubHoverA3 = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 13.85rem;
	font-size: 1.7rem;
	&: hover {
		background: ${Colors.blue_hover};
        transition: all 0.5s;
	}
`;

/* 사이트맵4 CSS */

const SSiteMapBackGroundD4 = styled.div`
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

const SSiteMapGoToSiteD4 = styled.div`
	padding: 16%;
`;

const SSiteMapGoToSiteFontD4 = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const SSiteMapGoToSiteSubFontD4 = styled.div`
	font-size: 1.7rem;
	line-height: 1.5;
`;

function CMainSiteHover4() {
	return (
		<SSiteHoverContainer4 className='mainSiteHover'>
			<SSiteHoverU4>
				<SSiteHoverL4>
					<SSiteSubHoverA4 to='../components/Intro'>공지사항</SSiteSubHoverA4>
				</SSiteHoverL4>
				<SSiteHoverL4>
					<SSiteSubHoverA4 to='../components/Intro'>보도자료</SSiteSubHoverA4>
				</SSiteHoverL4>
				<SSiteHoverL4>
					<SSiteSubHoverA4 to='../components/Intro'>FAQ</SSiteSubHoverA4>
				</SSiteHoverL4>
				<SSiteHoverL4>
					<SSiteSubHoverA4 to='../components/Intro'>contact</SSiteSubHoverA4>
				</SSiteHoverL4>
			</SSiteHoverU4>
		</SSiteHoverContainer4>
	);
}

const SSiteHoverContainer4 = styled.div`
	display: none;
	position: absolute;
	bottom: 21.7rem;
`;

const SSiteHoverU4 = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const SSiteHoverL4 = styled.li`
	height: 6.925rem;
	text-align: center;
`;

const SSiteSubHoverA4 = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
	width: 27.7rem;
	height: 6.925rem;
	font-size: 1.7rem;
	&: hover {
		background: ${Colors.blue_hover};
        transition: all 0.5s;
	}
`;

export default MainSite;
