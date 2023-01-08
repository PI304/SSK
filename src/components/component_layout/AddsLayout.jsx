import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import STitle from './Title';
import Sidebar from './Sidebar';
import pageTitle from '../../constants/pageTitle';
import MainContainer from './MainContainer';

function AddsLayout() {
	const locationHook = useLocation();
	const path = locationHook.pathname;
	const title = path.split('/').reverse()[0];
	return (
		<Main>
			<MainContainer>
				<STitle>{pageTitle[title]}</STitle>
				<Sidebar />
				<Outlet />
			</MainContainer>
		</Main>
	);
}

const Main = styled.div`
	min-height: 100vh;
	flex: 1 1 auto;
`;
export default AddsLayout;
