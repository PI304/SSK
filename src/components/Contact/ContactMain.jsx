import styled from 'styled-components';
import Sidebar from '../component_layout/Sidebar';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import ContactContent from './ContactContent';

function ContactMain() {
	return (
		<MainContainer>
			<SContactBlockD />
			<STitle>Contact</STitle>
			<Sidebar />
			<ContactContent />
		</MainContainer>
	);
}

const SContactBlockD = styled.div`
	width: 16rem;
	height: 5.8rem;
`;

export default ContactMain;
