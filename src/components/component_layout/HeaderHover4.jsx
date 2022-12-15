import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';

function CMenuHover4() {
	return (
		<SMenuL>
			<SMenuA to='../components/Notice'>소통공간</SMenuA>
			<SSubMenuU>
				<SSubMenuTopA to='../components/Notice'>공지사항</SSubMenuTopA>
				<SSubMenuA to='../components/Reports'>보도자료</SSubMenuA>
				<SSubMenuA to='../components/FAQ'>FAQ</SSubMenuA>
				<SSubMenuA to='../components/Contact'>Contact</SSubMenuA>
			</SSubMenuU>
		</SMenuL>
	);
}

const SMenuL = styled.li`
	font-size: 3rem;
	display: flex;
	flex-direction: column;
	width: 13rem;
`;

const SMenuA = styled(Link)`
	margin-top: 4rem;
	margin-bottom: 3.2rem;
	height: 9rem;
	display: flex;
	align-self: center;
	justify-content: center;
	flex-direction: column;
`;

const SSubMenuU = styled.ul`
	display: none;
	width: 13rem;
	height: 24rem;
	${SMenuL}:hover & {
		display: block;
	}
`;

const SSubMenuTopA = styled(Link)`
	height: 6rem;
	width: 13rem;
	display: block;
	background: ${Colors.blue4};
	text-align: center;
	border-top: 4px solid ${Colors.menuline};
	position: relative;
	top: 0.3rem;
	z-index: 1;
	font-size: 1.5rem;
	padding-top: 2.2rem;
	&:hover {
		background: ${Colors.blue_hover};
	}
`;

const SSubMenuA = styled(Link)`
	height: 6rem;
	width: 13rem;
	display: block;
	background: ${Colors.blue4};
	text-align: center;
	position: relative;
	top: 0.3rem;
	z-index: 1;
	font-size: 1.5rem;
	padding-top: 2.2rem;
	&:hover {
		background: ${Colors.blue_hover};
	}
`;

export default CMenuHover4;
