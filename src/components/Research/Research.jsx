import { useState, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import WhitePattern from '../../assets/pattern_white.png';
import BluePattern from '../../assets/pattern_blue.png';
import CardContent from './CardContent';
import MainContainer from '../component_layout/MainContainer';
import TitleCss from '../component_layout/Title';

function Research() {
	const [over, setOver] = useState(false);
	const [under, setUnder] = useState(true);
	const [num, setNum] = useState(0);

	const onMouseOver = (cardNum) => {
		setOver(true);
		setUnder(false);
		setNum(cardNum);
	};
	const onMouseOut = () => {
		setOver(false);
		setUnder(true);
		setNum(0);
	};

	return (
		<LayoutContainerCss>
			<Header />
			<MainContainer>
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
						onMouseOver={() => onMouseOver(1)}
						onMouseOut={onMouseOut}
						over={num === 1 ? over : undefined}
						under={num === 1 ? under : undefined}
					/>
					<SpaceCss />
					<CardContent
						outTitle={['알파 세대 디지털 일상 데이터', <br />, '(ADDS-D; Daily)']}
						innerTitle='알파 세대 디지털 일상 데이터 (ADDS-D; Daily)'
						innerContent={[
							'알파 세대의 스트레스, 수면, 운동, 식사, 건강행동, 디지털 사용에 대한 양적 설문조사',
							<br />,
							<br />,
							'알파 세대 400명 대상 1~3차년도 연차별 1회 반복 수집',
						]}
						onMouseOver={() => onMouseOver(2)}
						onMouseOut={onMouseOut}
						over={num === 2 ? over : undefined}
						under={num === 2 ? under : undefined}
					/>
					<SpaceCss />
					<CardContent
						outTitle={[
							'알파 세대의 사회화 과정에 관한 질적 데이터',
							<br />,
							'(ADDS-Q; Qualitative)',
						]}
						innerTitle='알파 세대의 사회화 과정에 관한 질적 데이터 (ADDS-Q; Qualitative)'
						innerContent={[
							'알파 세대의 부모(1차년도), 교사(2차년도), 알파 세대 본인(3차년도) 대상 심층 인터뷰',
							<br />,
							<br />,
							' 알파 세대 청소년과 주요 체계를 대상으로 디지털 일상과 사회화 과정 및 특성, 새로운 이슈에 대한 심층 인터뷰',
						]}
						onMouseOver={() => onMouseOver(3)}
						onMouseOut={onMouseOut}
						over={num === 3 ? over : undefined}
						under={num === 3 ? under : undefined}
					/>
					<SpaceCss />
					<CardContent
						outTitle={['알파 세대 일상에 대한 스마트 디바이스 측정', <br />, '(ADDS-S; Smart)']}
						innerTitle='생체 지표(ADDS-B; Bio)'
						innerContent={[
							'스마트 디바이스(스마트 워치)의 전기반응 센서와 행동기반 기술을 활용하여 알파 세대의 운동, 식사, 수면, 디지털 사용을 추적',
							<br />,
							<br />,
							'2차와 3차년도에 200명을 대상으로 1일 3회(아침,점심,저녁) 1주일간 측정',
						]}
						onMouseOver={() => onMouseOver(4)}
						onMouseOut={onMouseOut}
						over={num === 4 ? over : undefined}
						under={num === 4 ? under : undefined}
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
						onMouseOver={() => onMouseOver(5)}
						onMouseOut={onMouseOut}
						over={num === 5 ? over : undefined}
						under={num === 5 ? under : undefined}
					/>
				</WrapperCss>
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

const WrapperCss = styled.div`
	display: flex;
	flex-direction: column;
`;

const SpaceCss = styled.div`
	height: 3rem;
`;

export default Research;
