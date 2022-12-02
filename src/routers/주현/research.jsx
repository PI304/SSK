import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../../component_layout/header';
import Footer from '../../component_layout/footer';

function Research() {
	return (
		<LayoutContainerCss>
			<Header />
			<MainContainer>
				<Head>
					<p1>조사 설계</p1>
				</Head>
			</MainContainer>

			<Footer />
		</LayoutContainerCss>
	);
}

const LayoutContainerCss = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
`;

const Head = styled.div`
	width: 157px;
	height: 58px;
	font-weight: 500;
	font-size: 40px;
	line-height: 58px;
	text-align: center;
`;

const MainContainer = styled.div`
	width: 75rem;
	margin: 3rem auto;
	margin-bottom: 6rem;
	display: grid;
	grid-template-columns: 10rem 62rem;
	grid-gap: 3rem;
`;

export default Research;
