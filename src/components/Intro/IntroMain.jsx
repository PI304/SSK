import styled from 'styled-components';
import Sidebar from '../component_layout/Sidebar';
import MainContainer from '../component_layout/MainContainer';
import IntroContent from './IntroMainContent';

function IntroMain() {
	return (
		<main>
			<MainContainer>
				<SIntroBlockD />
				<SIntroTitleD>ADDS 소개</SIntroTitleD>
				<Sidebar />
				<IntroContent />
			</MainContainer>
		</main>
	);
}

const SIntroBlockD = styled.div`
	width: 16rem;
	height: 5.8rem;
`;

const SIntroTitleD = styled.div`
	width: 99.2rem;
	height: 5.8rem;
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 4.3rem;
`;
export default IntroMain;
