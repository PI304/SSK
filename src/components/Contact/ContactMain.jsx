import styled from 'styled-components';
import Sidebar from '../component_layout/Sidebar';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import ContactContent from './ContactContent';

function ContactMain() {
	return (
		<MainContainer>
			<STitle>Contact</STitle>
			<Sidebar />
			<ContactContent />
		</MainContainer>
	);
}

export default ContactMain;
