/* eslint-disable import/no-cycle */
import SLayoutContainer from '../component_layout/LayoutContainer';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import IntroMain from './IntroMain';

function Intro() {
	return (
		<SLayoutContainer>
			<Header />

			<IntroMain />

			<Footer />
		</SLayoutContainer>
	);
}

export default Intro;
