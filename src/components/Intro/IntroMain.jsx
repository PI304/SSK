import styled from 'styled-components';
import Sidebar from '../component_layout/Sidebar';
import IntroContent from './IntroMainContent';

function IntroMain() {
	return (
		<main>
			<MainContainer>
				<IntroBlock />
				<IntroTitle>ADDS 소개</IntroTitle>
				<Sidebar />
				<IntroContent />
			</MainContainer>
		</main>
	);
}

const MainContainer = styled.div`
	display: grid;
	margin: 3rem auto;
	margin-top: 6rem;
	margin-bottom: 6rem;
	width: 120rem;
	height: 164.63rem;
	grid-template-columns: 18rem 99rem;
	grid-gap: 3rem;
`;

const IntroBlock = styled.div`
	width: 16rem;
	height: 5.8rem;
`;

const IntroTitle = styled.div`
	width: 99.2rem;
	height: 5.8rem;
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 4.3rem;
`;
export default IntroMain;
