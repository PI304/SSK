import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';
import Logo from '../../assets/yonsei_highq_1200x630.png';
import HeaderHover from './HeaderHover';
import urls from '../../constants/Urls';

function Header() {
	return (
		<HeaderContainer>
			<Navigation>
				<CLogo />

				<CMenu />

				<CSelect />
			</Navigation>
		</HeaderContainer>
	);
}

/* Header Container */
const HeaderContainer = styled.header`
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const Navigation = styled.nav`
	margin: auto;
	width: 117.501rem;
	display: grid;
	grid-template-columns: 1fr 7fr 1fr;
	align-items: center;
`;

/* Logo */
function CLogo() {
	return (
		<div>
			<Link to={urls.Main}>
				<SLogoI src={Logo} alt='Logo' />
			</Link>
		</div>
	);
}

const SLogoI = styled.img`
	width: 18rem;
	height: 9rem;
	position: relative;
`;

/* Menu */
function CMenu() {
	return (
		<SMenuD>
			<HeaderHover />
		</SMenuD>
	);
}

const SMenuD = styled.div`
	width: 60rem;
	height: 9rem;
	justify-self: end;
	display: flex;
	justify-content: center;
	margin-right: 4rem;
	position: relative;
	bottom: 0.4rem;
`;

/* Select */
function CSelect() {
	return (
		<SSelectS>
			<option value='한국어'>한국어</option>
			<option value='영어'>영어</option>
		</SSelectS>
	);
}

const SSelectS = styled.select`
	color: ${Colors.select1};
	border-color: ${Colors.select2};
	width: 11.6rem;
	height: 2.901rem;
	padding: 0 0.48rem;
	position: relative;
`;

export default Header;
