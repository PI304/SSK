import styled from 'styled-components';
import Sidebar from '../component_layout/Sidebar';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import IntroContent from './IntroMainContent';

function IntroMain() {
	return (
		<main>
			<MainContainer>
				<STitle>ADDS 소개</STitle>
				<Sidebar />
				<IntroContent />
			</MainContainer>
		</main>
	);
}

export default IntroMain;
