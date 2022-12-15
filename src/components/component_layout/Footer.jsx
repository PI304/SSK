import styled from 'styled-components';
import Logo from '../../assets/yonsei.png';
import Colors from '../../constants/colors';

function Footer() {
	return (
		<FooterContainer>
			<SInfoD>
				<CLogo />
				<CTitle />
				<CAddress />
			</SInfoD>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	height: 12rem;
	display: flex;
	align-items: center;
	background-color: ${Colors.gray};
`;

const SInfoD = styled.div`
	width: 92.4rem;
	margin: auto;
	height: 100%;
	display: flex;
	align-items: center;
`;

/* 푸터 로고 컴포넌트 및 CSS */

function CLogo() {
	return (
		<CLogoD>
			<img src={Logo} alt='yonsei' width='53' height='53' />
		</CLogoD>
	);
}

const CLogoD = styled.div`
	display: flex;
	margin-right: 2rem;
`;

/* 푸터 제목 컴포넌트 및 CSS */

function CTitle() {
	return (
		<CTitleD>
			연세대학교 SSK ADDS 연구팀
			<br />
			Alpha generation Digital Daily Survey
		</CTitleD>
	);
}

const CTitleD = styled.div`
	font-weight: 550;
	margin-right: 1.6rem;
	font-size: 1.6rem;
	width: 28.2rem;
	line-height: 2.4rem;
`;

/* 푸터 주소 컴포넌트 및 CSS */

function CAddress() {
	return (
		<SAddressD>
			(03722) 서울시 서대문구 연세로 50 연세우유(708동) 309호
			<br />
			COPYRIGHTS (C) COLLEGE OF HUMAN ECOLOGY OF YONSEI. ALL RIGHTS RESERVED.
		</SAddressD>
	);
}

const SAddressD = styled.div`
	font-size: 1.5rem;
	align-self: flex-center;
	line-height: 2rem;
`;

export default Footer;
