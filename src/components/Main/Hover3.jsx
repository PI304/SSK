import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG3 from '../../assets/document.svg';

function CSite3() {
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
			)}
		</div>
	);
}

const SMainSiteBox3D = styled.div`
	background-image: url(${IMG3});
	background-color: ${Colors.blue4};
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: 16rem 15.6rem;
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
					<SSiteHoverL3>
						<SSiteSubHoverA3 to='../Resources'>자료안내</SSiteSubHoverA3>
					</SSiteHoverL3>
					<SSiteHoverL3>
						<SSiteSubHoverA3 to='../Papers'>데이터활용논문</SSiteSubHoverA3>
					</SSiteHoverL3>
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

const SSiteHoverL3 = styled.li`
	height: 13.85rem;
	text-align: center;
`;

const SSiteSubHoverA3 = styled(Link)`
	background-color: ${Colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 27.7rem;
	height: 13.85rem;
	font-size: 1.7rem;
	&:hover {
		background-color: ${Colors.blue_hover};
		transition: all 0.5s;
	}
`;

export default CSite3;
