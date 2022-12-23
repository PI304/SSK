import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG4 from '../../assets/info.svg';
import urls from '../../constants/Urls';

function CSite4() {
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
			)}
		</div>
	);
}

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
					<SSiteHoverL4>
						<SSiteSubHoverA4 to={urls.notice}>공지사항</SSiteSubHoverA4>
					</SSiteHoverL4>
					<SSiteHoverL4>
						<SSiteSubHoverA4 to={urls.reports}>보도자료</SSiteSubHoverA4>
					</SSiteHoverL4>
					<SSiteHoverL4>
						<SSiteSubHoverA4 to={urls.FAQ}>FAQ</SSiteSubHoverA4>
					</SSiteHoverL4>
					<SSiteHoverL4>
						<SSiteSubHoverA4 to={urls.contact}>contact</SSiteSubHoverA4>
					</SSiteHoverL4>
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

const SSiteHoverL4 = styled.li`
	height: 6.925rem;
	text-align: center;
`;

const SSiteSubHoverA4 = styled(Link)`
	background-color: ${Colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 27.7rem;
	height: 6.925rem;
	font-size: 1.7rem;
	&:hover {
		background-color: ${Colors.blue_hover};
		transition: all 0.5s;
	}
`;

export default CSite4;
