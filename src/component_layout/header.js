import styled from 'styled-components';
import Logo from '../assets/yonsei_highq_1200x630.png';

import Intro from '../routers/intro';

import Publication from '../routers/publication';

import Resources from '../routers/resources';
import Notice from '../routers/notice';

function Header() {
	return (
		<HeaderContainerCss>
			<Nav>
				<HeaderLogo />

				<NavMenuCss>
					<NavMenuUlCss>
						<NavMenuLi1 />

						<NavMenuLi2 />

						<NavMenuLi3 />

						<NavMenuLi4 />
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
			<a href='http://localhost:3000/'>
				<img src={Logo} width='175' height='90' alt='Logo' />
			</a>
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
	height: 8rem;
	justify-self: end;
	margin-right: 7rem;
`;

const NavMenuUlCss = styled.ul`
	display: flex;
	justify-content: flex-end;
	gap: 1rem 6.8rem;
	height: 8rem;
`;

function NavMenuLi1() {
	return (
		<NavMenuLiCss>
			<a href='../routers/intro'>ADDS소개</a>
			<NavSubMenuCss>
				<li>
					<a>ADDS 소개</a>
				</li>
				<li>
					<a>연구진 소개</a>
				</li>
				<li>
					<a>조사설계</a>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi2() {
	return (
		<NavMenuLiCss>
			<a href='../routers/publication'>발간물</a>
			<NavSubMenuCss>
				<li>
					<a>발간물</a>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi3() {
	return (
		<NavMenuLiCss>
			<a href='../routers/resources'>데이터</a>
			<NavSubMenuCss>
				<li>
					<a>자료안내</a>
				</li>
				<li>
					<a>데이터활용논문</a>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi4() {
	return (
		<NavMenuLiCss>
			<a href='../routers/notice'>소통공간</a>
			<NavSubMenuCss>
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
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}
const NavMenuLiCss = styled.li`
	font-size: 3rem;
	display: flex;
	flex-direction: column;
`;

const NavSubMenuCss = styled.ul`
	margin-top: 2rem;
	display: block;
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
