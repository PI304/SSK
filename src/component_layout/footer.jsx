import styled from 'styled-components';
import Logo from '../assets/yonsei.png';

function Footer() {
	return (
		<FooterCss>
			<InfoCss>
				<FooterLogo />
				<FooterTitle />
				<FooterAddress />
			</InfoCss>
		</FooterCss>
	);
}

const FooterCss = styled.footer`
	height: 12rem;
	display: flex;
	align-items: center;
	background-color: #e4e9f0;
`;

const InfoCss = styled.div`
	width: 92.4rem;
	margin: auto;
	height: 100%;
	display: flex;
	align-items: center;
`;

/* 푸터 로고 컴포넌트 및 CSS */

function FooterLogo() {
	return (
		<FooterLogoCss>
			<img src={Logo} alt='yonsei' width='53' height='53' />
		</FooterLogoCss>
	);
}

const FooterLogoCss = styled.div`
	display: flex;
	margin-right: 1.6rem;
`;

/* 푸터 제목 컴포넌트 및 CSS */

function FooterTitle() {
	return (
		<FooterTitleCss>
			연세대학교 SSK ADDS 연구팀
			<br />
			Alpha generation Digital Daily Survey
		</FooterTitleCss>
	);
}

const FooterTitleCss = styled.div`
	font-weight: 550;
	margin-right: 1.6rem;
	font-size: 1.5rem;
	gap: 1rem;
`;

/* 푸터 주소 컴포넌트 및 CSS */

function FooterAddress() {
	return (
		<FooterAddressCss>
			(03722) 서울시 서대문구 연세로 50 연세우유(708동) 309호
			<br />
			COPYRIGHTS (C) COLLEGE OF HUMAN ECOLOGY OF YONSEI. ALL RIGHTS RESERVED.
		</FooterAddressCss>
	);
}

const FooterAddressCss = styled.div`
	font-size: 1.5rem;
	align-self: flex-center;
`;

export default Footer;
