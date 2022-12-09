import styled from 'styled-components';
import Sidebar from '../component_layout/Sidebar';
import MainContainerCss from '../component_layout/MainContainer';
import IntroContent from './IntroMainContent';

function IntroMain() {
	return (
		<main>
			<MainContainerCss>
				<IntroBlock />
				<IntroTitle>ADDS 소개</IntroTitle>
				<Sidebar />
				<IntroContent />
			</MainContainerCss>
		</main>
	);
}

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
