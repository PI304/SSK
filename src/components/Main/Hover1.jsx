import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG1 from '../../assets/handshake.svg';

function CSite1() {
	const [isHover, setIsHover] = useState(false);
	const onMouseEnter = () => {
		setIsHover(true);
	};
	const onMouseLeave = () => {
		setIsHover(false);
	};
	return (
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
	);
}

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

function CMainSiteHover() {
	return (
		<div>
			<SHoverContainer>
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
	background-color: ${Colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 27.7rem;
	height: 9.23rem;
	font-size: 1.7rem;
	&:hover {
		background-color: ${Colors.blue_hover};
		transition: all 0.5s;
	}
`;

export default CSite1;
