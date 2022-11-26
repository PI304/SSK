import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainerCss>
			<Nav>
				<div />
				<NavMenuCss>
					<NavMenuUlCss>
						<NavMenuLiCss>ADDS 소개</NavMenuLiCss>
						<NavMenuLiCss>발간물</NavMenuLiCss>
						<NavMenuLiCss>데이터</NavMenuLiCss>
						<NavMenuLiCss>소통공간</NavMenuLiCss>
					</NavMenuUlCss>
				</NavMenuCss>
				<div />
			</Nav>
		</HeaderContainerCss>
	);
}

const HeaderContainerCss = styled.header`
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const Nav = styled.nav`
	margin: auto;
	width: 73.438rem;
	height: 5.75rem;
	display: grid;
	grid-template-columns: 1fr 7fr 1fr;
	align-items: center;
`;

const NavMenuCss = styled.div`
	width: fit-content;
	justify-self: end;
	margin-right: 4rem;
`;

const NavMenuUlCss = styled.ul`
	display: flex;
	justify-content: flex-end;
	gap: 1rem 5rem;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const NavMenuLiCss = styled.li``;

export default Header;
