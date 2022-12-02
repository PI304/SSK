import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/yonsei_highq_1200x630.png';

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
	width: 60rem;
	height: 9rem;
	justify-self: end;
	display: flex;
	justify-content: center;
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
			<Link to='../routers/현석/intro'>ADDS소개</Link>
			<NavSubMenuCss>
				<li>
					<Link to='../routers/현석/intro'>ADDS 소개</Link>
				</li>
				<li>
					<Link to='../routers/현아/members'>연구진 소개</Link>
				</li>
				<li>
					<Link to='../routers/주현/research'>조사설계</Link>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi2() {
	return (
		<NavMenuLiCss>
			<Link to='../routers/주현/publication'>발간물</Link>
			<NavSubMenuCss>
				<li>
					<Link to='../routers/주현/publication'>발간물</Link>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi3() {
	return (
		<NavMenuLiCss>
			<Link to='../routers/현아/resources'>데이터</Link>
			<NavSubMenuCss>
				<li>
					<Link to='../routers/현아/resources'>자료안내</Link>
				</li>
				<li>
					<Link to='../routers/현석/papers'>데이터활용논문</Link>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}

function NavMenuLi4() {
	return (
		<NavMenuLiCss>
			<Link to='../routers/현아/notice'>소통공간</Link>
			<NavSubMenuCss>
				<li>
					<Link to='../routers/현아/notice'>공지사항</Link>
				</li>
				<li>
					<Link to='../routers/주현/reports'>보도자료</Link>
				</li>
				<li>
					<Link to='../routers/주현/FAQ'>FAQ</Link>
				</li>
				<li>
					<Link to='../routers/현석/contact'>Contact</Link>
				</li>
			</NavSubMenuCss>
		</NavMenuLiCss>
	);
}
const NavMenuLiCss = styled.li`
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	width: 15rem;
`;

const NavSubMenuCss = styled.ul`
	width: 9rem;
	height: 5rem;
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
