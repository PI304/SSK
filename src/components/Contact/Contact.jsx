import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import SLayoutContainer from '../component_layout/LayoutContainer';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import ContactMain from './ContactMain';

function Contact() {
	return (
		<SLayoutContainer>
			<Header />

			<ContactMain />

			<Footer />
		</SLayoutContainer>
	);
}

export default Contact;
