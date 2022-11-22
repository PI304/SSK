import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainerCss>
			<Nav>
				<NavMenuCss>
					<NavMenuUlCss>
						<li>ADDS 소개</li>
						<li>발간물</li>
						<li>데이터</li>
						<li>소통공간</li>
					</NavMenuUlCss>
				</NavMenuCss>
				<div />
				<div />
			</Nav>
		</HeaderContainerCss>
	);
}

const HeaderContainerCss = styled.header`
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
	flex: 0 0 auto;
	justify-content: center;
`;

const Nav = styled.nav`
	margin: auto;
	width: 73.438rem;
	display: grid;
	grid-template-columns: 1fr 7fr 1fr;
	align-items: center;
`;

const NavMenuCss = styled.div`
	height: 5.75rem;
	width: fit-content;
	justify-self: end;
`;

const NavMenuUlCss = styled.ul`
	display: flex;
	justify-content: flex-end;
`;

export default Header;
