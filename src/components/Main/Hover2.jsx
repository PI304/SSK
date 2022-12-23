import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG2 from '../../assets/news.svg';

function CSite2() {
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
				<SMainSiteBox2D>
					<SFontBox2D>
						<SFont2D>발간물</SFont2D>
						<SSubFont2D>발간물</SSubFont2D>
					</SFontBox2D>
				</SMainSiteBox2D>
			)}
		</div>
	);
}

const SMainSiteBox2D = styled.div`
	background-image: url(${IMG2});
	background-color: ${Colors.blue4};
	background-size: 45%;
	background-repeat: no-repeat;
	background-position: 14rem 14.8rem;
	width: 27.7rem;
	height: 27.7rem;
`;

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

function CMainSiteHover() {
	return (
		<div>
			<SHoverContainer>
				<SSiteHoverU>
					<SSiteHoverL2>
						<SSiteSubHoverA2 to='../Publication'>발간물</SSiteSubHoverA2>
					</SSiteHoverL2>
				</SSiteHoverU>
			</SHoverContainer>
		</div>
	);
}

const SHoverContainer = styled.div`
	position: relative;
	z-index: 0;
	box-shadow: 0px 2px 10px rgb(0 0 0 / 20%);
`;

const SSiteHoverU = styled.ul`
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
	background-color: ${Colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 27.7rem;
	height: 27.7rem;
	font-size: 1.7rem;
	&:hover {
		background-color: ${Colors.blue_hover};
		transition: all 0.5s;
	}
`;

export default CSite2;
