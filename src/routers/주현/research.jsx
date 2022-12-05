import { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../../component_layout/header';
import Footer from '../../component_layout/footer';
import WhitePattern from '../../assets/pattern_white.png';
import BluePattern from '../../assets/pattern_blue.png';
import CardContent from './CardContent';

function Research() {
	const [value, setValue] = useState(1);

	const changeValue = () => {
		setValue(2);
	};

	const onMouseOver = () => {
		console.log('a');
	};

	return (
		<LayoutContainerCss>
			<Header />
			<MainContainerCss>
				<div />
				<TitleCss>조사 설계</TitleCss>
				<div />
				<WrapperCss>
					<ResearchCardCss>
						<CardSpaceCss />
						<CardTitleCss>기초 설문조사(ADDS-C; Core)</CardTitleCss>
						<CardDecoCss>
							<CardDecoBoxCss />
						</CardDecoCss>
					</ResearchCardCss>
					<SpaceCss />
					<ResearchCardCss>
						<CardSpaceCss />
						<CardTitleCss>
							알파 세대 디지털 일상 데이터
							<br />
							(ADDS-D; Daily)
						</CardTitleCss>
						<CardDecoCss>
							<CardDecoBoxCss />
						</CardDecoCss>
					</ResearchCardCss>
					<SpaceCss />
					<ResearchCardCss>
						<CardSpaceCss />
						<CardTitleCss>
							알파 세대의 사회화 과정에 관한 질적 데이터
							<br />
							(ADDS-Q; Qualitative)
						</CardTitleCss>
						<CardDecoCss>
							<CardDecoBoxCss />
						</CardDecoCss>
					</ResearchCardCss>
					<SpaceCss />
					<ResearchCardCss>
						<CardSpaceCss />
						<CardTitleCss>
							알파 세대 일상에 대한 스마트 디바이스 측정
							<br />
							(ADDS-S; Smart)
						</CardTitleCss>
						<CardDecoCss>
							<CardDecoBoxCss />
						</CardDecoCss>
					</ResearchCardCss>
					<SpaceCss />
					<ResearchCardCss>
						<CardSpaceCss />
						<CardTitleCss>
							생체 지표
							<br />
							(ADDS-B; Bio)
						</CardTitleCss>
						<CardDecoCss>
							<CardDecoBoxCss />
						</CardDecoCss>
					</ResearchCardCss>
					<SpaceCss />
					<CardContent />
				</WrapperCss>
			</MainContainerCss>

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

const TitleCss = styled.div`
	position: relative;
	left: 0.1rem;
	font-weight: 500;
	font-size: 2.5rem;
`;

const MainContainerCss = styled.div`
	width: 75rem;
	margin: 3rem auto;
	margin-bottom: 6rem;
	display: grid;
	grid-template-columns: 10rem 62rem;
	grid-gap: 3rem;
`;

const WrapperCss = styled.div`
	display: flex;
	flex-direction: column;
`;

const SpaceCss = styled.div`
	height: 2rem;
`;

const ResearchCardCss = styled.div`
	background-image: url(${WhitePattern});
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
	height: 15rem;
	font-size: 1.875rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// &:hover{
	// 	background-image: url(${BluePattern});
	// 	transition: 0.5s;
	// }
	}
`;

const CardSpaceCss = styled.div`
	height: 3.5rem;
`;

const CardTitleCss = styled.div`
	padding: 0 4.5rem;
	font-size: 1.875rem;
	font-weight: 700;
`;

const CardDecoCss = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CardDecoBoxCss = styled.div`
	width: 0;
	height: 0;
	border-top: 3.5rem solid #e2edfb;
	border-right: 3.5rem solid #6e98d4;
`;

export default Research;
