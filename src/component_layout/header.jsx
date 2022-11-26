import styled from 'styled-components';
import Logo from '../assets/yonsei_highq_1200x630.png';
import PageIntro from '../Routes/intro';

function Header() {
	return (
		<HeaderContainerCss>
			<Nav>
				<HeaderLogo />
				<NavMenuCss>
					<NavMenuUlCss>
						<NavMenuLiCss>ADDS소개</NavMenuLiCss>
						<NavMenuLiCss>발간물</NavMenuLiCss>
						<NavMenuLiCss>데이터</NavMenuLiCss>
						<NavMenuLiCss>소통공간</NavMenuLiCss>
					</NavMenuUlCss>
				</NavMenuCss>
				<HeaderSelect />
			</Nav>
		</HeaderContainerCss>
	);
}

function HeaderLogo() {
	return (
		<a href='http://localhost:3000/'>
			<HeaderLogoCss>
				<img src={Logo} width='170' height='90' alt='Logo' />
			</HeaderLogoCss>
		</a>
	);
}

const HeaderLogoCss = styled.div`
	width: 17.5rem;
	height: 9rem;
`;

function HeaderSelect() {
	return (
		<HeaderSelectCss>
			<option value='한국어'>한국어</option>
			<option value='영어'>영어</option>
		</HeaderSelectCss>
	);
}

const HeaderSelectCss = styled.select`
	color: #767676;
	border-color: #e0e0e0;
	width: 11rem;
	height: 3rem;
	padding: 0 0.3rem;
	top: 2px;
`;

const HeaderContainerCss = styled.header`
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const Nav = styled.nav`
	margin: auto;
	width: 120rem;
	height: 9rem;
	display: grid;
	grid-template-columns: 1fr 7fr 1fr;
	align-items: center;
`;

const NavMenuCss = styled.div`
	width: fit-content;
	justify-self: end;
	margin-right: 6.3rem;
	margin-top: 0.5rem;
`;

const NavMenuUlCss = styled.ul`
	display: flex;
	justify-content: flex-end;
	gap: 1rem 6.9rem;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const NavMenuLiCss = styled.li`
	font-size: 1.9rem;
`;

export default Header;
