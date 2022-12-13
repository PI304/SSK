import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import SLayoutContainer from '../component_layout/LayoutContainer';
import Sidebar from '../component_layout/Sidebar';

function Reports() {
	return (
		<SLayoutContainer>
			<Header />
			<MainContainer>
				<STitle>보도자료</STitle>
				<Sidebar />
			</MainContainer>
			<Footer />
		</SLayoutContainer>
	);
}
export default Reports;
