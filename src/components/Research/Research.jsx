import { useState, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import WhitePattern from '../../assets/pattern_white.png';
import BluePattern from '../../assets/pattern_blue.png';
import CardContent from './CardContent';
import MainContainerCss from '../component_layout/MainContainer';

function Research() {
	const [over, setOver] = useState(false);
	const [under, setUnder] = useState(true);

	const onMouseOver = () => {
		setOver(true);
		setUnder(false);
	};
	const onMouseOut = () => {
		setOver(false);
		setUnder(true);
	};

	return (
		<LayoutContainerCss>
			<Header />
			<MainContainerCss>
				<div />
				<TitleCss>조사 설계</TitleCss>
				<div />
				<WrapperCss>
					<CardContent
						outTitle='기초 설문조사 (ADDS-C; Core)'
						innerTitle='기초 설문조사 (ADDS-C; Core)'
						innerContent={[
							'알파 세대의 사회정서 발달(기질, 우울, 불안 등), 가족 내 상호작용, 학교 적응에 대한 양적 설문조사',
							<br />,
							<br />,
							'알파 세대 400명 대상 1~3차년도 연차별 1회 반복 수집',
						]}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
						over={over}
						under={under}
					/>
					<SpaceCss />
					<CardContent
						outTitle='생체 지표(ADDS-B; Bio)'
						innerTitle='생체 지표(ADDS-B; Bio)'
						innerContent={[
							'(타액) 타액(Salivary) 코티졸, DHEA(Dehydroepiandrosterone), ACTH(adrenocorticotropic), 카테콜아민(Catecholamine)등의 지표를 통해 스트레스에 대한 생리적 반응 측정',
							<br />,
							<br />,
							'(전기 반응 센서) EMG(Electro–myography), BIA(Bio-Impedence Analysis), DOMA(Detection OfMuscle Activation), ECG(Electro- cardiogram)',
							<br />,
							<br />,
							'1차년도 프로토콜 세팅, 2차년도 20명 대상 파일럿 테스트 후, 3차년도 200명 대상 생체지표 측정',
						]}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
						over={over}
						under={under}
					/>
					<SpaceCss />
					<CardContent
						outTitle='생체 지표(ADDS-B; Bio)'
						innerTitle='생체 지표(ADDS-B; Bio)'
						innerContent={[
							'(타액) 타액(Salivary) 코티졸, DHEA(Dehydroepiandrosterone), ACTH(adrenocorticotropic), 카테콜아민(Catecholamine)등의 지표를 통해 스트레스에 대한 생리적 반응 측정',
							<br />,
							<br />,
							'(전기 반응 센서) EMG(Electro–myography), BIA(Bio-Impedence Analysis), DOMA(Detection OfMuscle Activation), ECG(Electro- cardiogram)',
							<br />,
							<br />,
							'1차년도 프로토콜 세팅, 2차년도 20명 대상 파일럿 테스트 후, 3차년도 200명 대상 생체지표 측정',
						]}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
						over={over}
						under={under}
					/>
					<SpaceCss />
					<CardContent
						outTitle='생체 지표(ADDS-B; Bio)'
						innerTitle='생체 지표(ADDS-B; Bio)'
						innerContent={[
							'(타액) 타액(Salivary) 코티졸, DHEA(Dehydroepiandrosterone), ACTH(adrenocorticotropic), 카테콜아민(Catecholamine)등의 지표를 통해 스트레스에 대한 생리적 반응 측정',
							<br />,
							<br />,
							'(전기 반응 센서) EMG(Electro–myography), BIA(Bio-Impedence Analysis), DOMA(Detection OfMuscle Activation), ECG(Electro- cardiogram)',
							<br />,
							<br />,
							'1차년도 프로토콜 세팅, 2차년도 20명 대상 파일럿 테스트 후, 3차년도 200명 대상 생체지표 측정',
						]}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
						over={over}
						under={under}
					/>
					<SpaceCss />
					<CardContent
						outTitle='생체 지표(ADDS-B; Bio)'
						innerTitle='생체 지표(ADDS-B; Bio)'
						innerContent={[
							'(타액) 타액(Salivary) 코티졸, DHEA(Dehydroepiandrosterone), ACTH(adrenocorticotropic), 카테콜아민(Catecholamine)등의 지표를 통해 스트레스에 대한 생리적 반응 측정',
							<br />,
							<br />,
							'(전기 반응 센서) EMG(Electro–myography), BIA(Bio-Impedence Analysis), DOMA(Detection OfMuscle Activation), ECG(Electro- cardiogram)',
							<br />,
							<br />,
							'1차년도 프로토콜 세팅, 2차년도 20명 대상 파일럿 테스트 후, 3차년도 200명 대상 생체지표 측정',
						]}
						onMouseOver={onMouseOver}
						onMouseOut={onMouseOut}
						over={over}
						under={under}
					/>
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
	left: 0.2rem;
	font-weight: 600;
	font-size: 4rem;
`;

// const MainContainerCss = styled.div`
// 	width: 120rem;
// 	margin: 5rem auto;
// 	margin-bottom: 10rem;
// 	display: grid;
// 	grid-template-columns: 16rem 100rem;
// 	grid-gap: 5rem;
// `;

const WrapperCss = styled.div`
	display: flex;
	flex-direction: column;
`;

const SpaceCss = styled.div`
	height: 3rem;
`;

const ResearchCardCss = styled.div`
	background-image: url(${WhitePattern});
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
	height: 24rem;
	font-size: 3rem;
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
