/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Logo from '../assets/yonsei_highq_1200x630.png';

function Header() {
	return (
		<HeaderContainerCss>
			<Nav>
				<HeaderLogo />
				<NavMenuCss>
					<NavMenuUlCss>
						<NavMenuLi1>
							<NavSubMenu1 />
						</NavMenuLi1>
						<NavMenuLi2>
							<NavSubMenu2 />
						</NavMenuLi2>
						<NavMenuLi3>
							<NavSubMenu3 />
						</NavMenuLi3>
						<NavMenuLi4>
							<NavSubMenu4 />
						</NavMenuLi4>
					</NavMenuUlCss>
				</NavMenuCss>
				<HeaderSelect />
			</Nav>
		</HeaderContainerCss>
	);
}

/* 전체헤더 CSS */

const HeaderContainerCss = styled.header`
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

/* 전체 nav CSS */

const Nav = styled.nav`
	margin: auto;
	width: 120rem;
	height: 9rem;
	display: grid;
	grid-template-columns: 1fr 7fr 1fr;
	align-items: center;
`;

/* 헤더 로고 컴포넌트 및 CSS */

function HeaderLogo() {
	return (
		<HeaderLogoCss>
			<img src={Logo} width='175' height='90' alt='Logo' />
		</HeaderLogoCss>
	);
}

const HeaderLogoCss = styled.div`
	width: 18rem;
	height: 9rem;
`;

/* 헤더 메뉴 컴포넌트 및 CSS */

const NavMenuCss = styled.div`
	width: fit-content;
	justify-self: end;
	margin-right: 7rem;
	margin-top: 1rem;
`;

const NavMenuUlCss = styled.ul`
	display: flex;
	justify-content: flex-end;
	gap: 1rem 6.8rem;
	list-style: none;
`;

function NavMenuLi1() {
	return (
		<NavMenuLiCss>
			<a href='https://www.yonsei.ac.kr/sc/'>ADDS소개</a>
		</NavMenuLiCss>
	);
}

function NavMenuLi2() {
	return (
		<NavMenuLiCss>
			<a href='https://www.yonsei.ac.kr/sc/'>발간물</a>
		</NavMenuLiCss>
	);
}

function NavMenuLi3() {
	return (
		<NavMenuLiCss>
			<a href='https://www.yonsei.ac.kr/sc/'>데이터</a>
		</NavMenuLiCss>
	);
}

function NavMenuLi4() {
	return (
		<NavMenuLiCss>
			<a href='https://www.yonsei.ac.kr/sc/'>소통공간</a>
		</NavMenuLiCss>
	);
}
const NavMenuLiCss = styled.li`
	font-size: 3rem;
	display: flex;
`;

/* 헤더 서브 메뉴 컴포넌트 및 CSS */

function NavSubMenu1() {
	return (
		<NavSubMenuCSS>
			<li>
				<a>ADDS 소개</a>
			</li>
			<li>
				<a>연구진 소개</a>
			</li>
			<li>
				<a>조사설계</a>
			</li>
		</NavSubMenuCSS>
	);
}

function NavSubMenu2() {
	return (
		<NavSubMenuCSS>
			<li>
				<a>발간물</a>
			</li>
		</NavSubMenuCSS>
	);
}

function NavSubMenu3() {
	return (
		<NavSubMenuCSS>
			<li>
				<a>자료안내</a>
			</li>
			<li>
				<a>데이터활용논문</a>
			</li>
		</NavSubMenuCSS>
	);
}

function NavSubMenu4() {
	return (
		<NavSubMenuCSS>
			<li>
				<a>공지사항</a>
			</li>
			<li>
				<a>보도자료</a>
			</li>
			<li>
				<a>FAQ</a>
			</li>
			<li>
				<a>Contact</a>
			</li>
		</NavSubMenuCSS>
	);
}

const NavSubMenuCSS = styled.ul`
	display: none;
	background: rgba(226, 237, 251, 0.9);
	text-align: center;
	border-top: 4px solid #8dbcff;
	position: relative;
	top: -3px;
	z-index: 1;
`;

/* 헤더 셀렉터 컴포넌트 및 CSS */

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
	width: 11.8rem;
	height: 3rem;
	padding: 0 0.3rem;
	margin-top: 1rem;
`;

export default Header;
