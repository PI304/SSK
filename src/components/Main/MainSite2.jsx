import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG1 from '../../assets/handshake.svg';
import IMG2 from '../../assets/news.svg';
import IMG3 from '../../assets/document.svg';
import IMG4 from '../../assets/info.svg';

function MainSite2() {
	const [isHover, setIsHover] = useState(false);
	const onMouseEnter = () => {
		setIsHover(true);
	};
	const onMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<SMainSiteContainer>
			<div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{isHover ? (
					<CMainSiteHover />
				) : (
					<SMainSiteBoxD>
						<SFontBoxD>
							<SFontD>ADDS소개</SFontD>
							<SSubFontD>
								ADDS소개
								<br />
								연구진소개
								<br />
								조사설계
							</SSubFontD>
						</SFontBoxD>
					</SMainSiteBoxD>
				)}
			</div>

			<div>
				<SMainSiteBox2D>
					<SFontBox2D>
						<SFont2D>발간물</SFont2D>
						<SSubFont2D>발간물</SSubFont2D>
					</SFontBox2D>
				</SMainSiteBox2D>
			</div>

			<div>
				<SMainSiteBox3D>
					<SFontBox2D>
						<SFont2D>데이터</SFont2D>
						<SSubFont2D>
							자료안내
							<br />
							데이터활용논문
						</SSubFont2D>
					</SFontBox2D>
				</SMainSiteBox3D>
			</div>

			<div>
				<SMainSiteBox4D>
					<SFontBox2D>
						<SFont2D>소통공간</SFont2D>
						<SSubFont2D>
							공지사항
							<br />
							보도자료
							<br />
							FAQ
							<br />
							Contact
						</SSubFont2D>
					</SFontBox2D>
				</SMainSiteBox4D>
			</div>
		</SMainSiteContainer>
	);
}

/* MainSite container */
const SMainSiteContainer = styled.div`
	display: flex;
	padding-bottom: 10rem;
	align-items: center;
	justify-content: space-between;
`;

/* Box 1(ADDS 소개) */
const SMainSiteBoxD = styled.div`
	background-image: url(${IMG1});
	background-color: ${Colors.blue4};
	background-size: 42%;
	background-repeat: no-repeat;
	background-position: 1.6rem 14.8rem;
	transform: scaleX(-1);
	width: 27.7rem;
	height: 27.7rem;
	position: relative;
	z-index: -1;
`;

const SFontBoxD = styled.div`
	padding: 16%;
	transform: scaleX(-1);
	line-height: 3.5rem;
`;

const SFontD = styled.div`
	font-weight: 750;
	font-size: 2.4rem;
	margin-bottom: 0.5vh;
`;

const SSubFontD = styled.div`
	font-size: 1.7rem;
	line-height: 2.5rem;
`;

/* Box 2(발간물) */
const SMainSiteBox2D = styled.div`
	background-image: url(${IMG2});
	background-color: ${Colors.blue4};
	background-size: 45%;
	background-repeat: no-repeat;
	background-position: 14rem 14.8rem;
	width: 27.7rem;
	height: 27.7rem;
`;

/* Box 3(데이터) */
const SMainSiteBox3D = styled.div`
	background-image: url(${IMG3});
	background-color: ${Colors.blue4};
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: 16rem 15.6rem;
	width: 27.7rem;
	height: 27.7rem;
`;

/* Box 4(소통공간) */
const SMainSiteBox4D = styled.div`
	background-image: url(${IMG4});
	background-color: ${Colors.blue4};
	background-size: 43%;
	background-repeat: no-repeat;
	background-position: 15rem 15.3rem;
	width: 27.7rem;
	height: 27.7rem;
`;

/* 2, 3, 4 폰트 */
const SFontBox2D = styled.div`
	padding: 16%;
	line-height: 3rem;
`;

const SFont2D = styled.div`
	font-weight: 750;
	font-size: 2.3rem;
	margin-bottom: 0.5vh;
`;

const SSubFont2D = styled.div`
	font-size: 1.7rem;
	line-height: 1.5;
`;

/* Hover 1 */
function CMainSiteHover() {
	const [isHover, setIsHover] = useState(false);
	const onMouseEnter = () => {
		setIsHover(true);
	};
	const onMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<div>
			<SHoverContainer>
				<SSiteHoverU>
					<SSiteHoverL onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<SSiteSubHoverA isHover={isHover} to='../components/Intro'>
							ADDS소개
						</SSiteSubHoverA>
					</SSiteHoverL>
					<SSiteHoverL>
						<SSiteSubHoverA to='../components/Members'>연구진소개</SSiteSubHoverA>
					</SSiteHoverL>
					<SSiteHoverL>
						<SSiteSubHoverA to='../components/Research'>조사설계</SSiteSubHoverA>
					</SSiteHoverL>
				</SSiteHoverU>
			</SHoverContainer>
		</div>
	);
}

const SHoverContainer = styled.div`
	position: relative;
	z-index: 0;
`;

const SSiteHoverU = styled.ul`
	width: 27.7rem;
	height: 27.7rem;
	display: flex;
	flex-direction: column;
`;

const SSiteHoverL = styled.li`
	height: 9.23rem;
	text-align: center;
`;

const SSiteSubHoverA = styled(Link)`
	background-color: ${(props) => (props.isHover ? Colors.blue_hover : Colors.white)};
	transition: all 0.5s;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 27.7rem;
	height: 9.23rem;
	font-size: 1.7rem;
`;

export default MainSite2;
