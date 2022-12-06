import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/yonsei_highq_1200x630.png';

function Header() {
	return (
		<HeaderContainerCss>
			<Nav>
				<HeaderLogo />

				<NavMenu />

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

/* 헤더 메뉴 */

function NavMenu() {
	return (
		<NavMenuCss>
			<NavMenuUlCss>
				<NavMenuLi1 />

				<NavMenuLi2 />

				<NavMenuLi3 />

				<NavMenuLi4 />
			</NavMenuUlCss>
		</NavMenuCss>
	);
}

/* 헤더 메뉴 컴포넌트 및 CSS */

const NavMenuCss = styled.div`
	width: 60rem;
	height: 9rem;
	justify-self: end;
	display: flex;
	justify-content: center;
	margin-right: 5rem;
`;

const NavMenuUlCss = styled.ul`
	display: flex;
	justify-content: flex-end;
	width: 60rem;
	height: 9rem;
`;

function NavMenuLi1() {
	return (
		<NavMenuLiCss>
			<NavMenuACss to='../routers/현석/Intro'>ADDS소개</NavMenuACss>
			<NavSubMenuCss className='dropDownMenu'>
				<li>
					<NavSubMenuTopACss to='../routers/현석/Intro'>ADDS 소개</NavSubMenuTopACss>
				</li>
				<li>
					<NavSubMenuACss to='../routers/현아/Members'>연구진 소개</NavSubMenuACss>
				</li>
				<li>
					<NavSubMenuACss to='../routers/주현/Research'>조사설계</NavSubMenuACss>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi2() {
	return (
		<NavMenuLiCss>
			<NavMenuACss to='../routers/주현/Publication'>발간물</NavMenuACss>
			<NavSubMenuCss className='dropDownMenu'>
				<li>
					<NavSubMenuTopACss to='../routers/주현/Publication'>발간물</NavSubMenuTopACss>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi3() {
	return (
		<NavMenuLiCss>
			<NavMenuACss to='../routers/현아/Resources'>데이터</NavMenuACss>
			<NavSubMenuCss className='dropDownMenu'>
				<li>
					<NavSubMenuTopACss to='../routers/현아/Resources'>자료안내</NavSubMenuTopACss>
				</li>
				<li>
					<NavSubMenuACss to='../routers/현석/Papers'>데이터활용논문</NavSubMenuACss>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi4() {
	return (
		<NavMenuLiCss>
			<NavMenuACss to='../routers/현아/notice'>소통공간</NavMenuACss>
			<NavSubMenuCss className='dropDownMenu'>
				<li>
					<NavSubMenuTopACss to='../routers/현아/Notice'>공지사항</NavSubMenuTopACss>
				</li>
				<li>
					<NavSubMenuACss to='../routers/주현/Reports'>보도자료</NavSubMenuACss>
				</li>
				<li>
					<NavSubMenuACss to='../routers/주현/FAQ'>FAQ</NavSubMenuACss>
				</li>
				<li>
					<NavSubMenuACss to='../routers/현석/Contact'>Contact</NavSubMenuACss>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}
const NavMenuLiCss = styled.li`
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	width: 13rem;
	height: 35rem;
	&: hover .dropDownMenu {
		display: block;
	}
`;

const NavMenuACss = styled(Link)`
	height: 9rem;
	text-align: center;
	padding-top: 4rem;
`;

const NavSubMenuCss = styled.ul`
	display: none;
`;

const NavSubMenuTopACss = styled(Link)`
	height: 6rem;
	width: 13rem;
	display: block;
	background: rgba(226, 237, 251, 0.9);
	text-align: center;
	border-top: 4px solid #8dbcff;
	position: relative;
	top: -3px;
	z-index: 1;
	font-size: 1.5rem;
	padding-top: 2.2rem;
	&: hover {
		background: rgba(141, 188, 255, 0.5);
	}
`;

const NavSubMenuACss = styled(Link)`
	height: 6rem;
	width: 13rem;
	display: block;
	background: rgba(226, 237, 251, 0.9);
	text-align: center;
	position: relative;
	top: -3px;
	z-index: 1;
	font-size: 1.5rem;
	padding-top: 2.2rem;
	&: hover {
		background: rgba(141, 188, 255, 0.5);
	}
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
