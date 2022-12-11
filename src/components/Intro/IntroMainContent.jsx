import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG from '../../assets/pattern_blue.png';
import IMG2 from '../../assets/introImage.PNG';

function IntroContent() {
	return (
		<SIntroContentContainer>
			<SBoxD1>
				<SFontP>ADDS</SFontP>
				<SFontP2>Alpha generation Digital Daily Survey</SFontP2>
			</SBoxD1>

			<div>
				<STitleD>알파 세대에 대한 새로운 이해의 필요성</STitleD>

				<SBoxD2>
					<SCircleD />
					<SSubBoxD>
						<SSubBoxFontD1>
							A세대의 시작,
							<br />
							그리고 COVID_19 펜데믹
						</SSubBoxFontD1>
						<SSubBoxFontD2>
							<SSubBoxFontU>
								<SSubBoxFontL>언택트 세대</SSubBoxFontL>
								<li>비대면 선호도 증가</li>
							</SSubBoxFontU>
							<SSubBoxFontU>
								<SSubBoxFontL>초연결 세대</SSubBoxFontL>
								<li>24시간 정보, 또래관계 연결</li>
							</SSubBoxFontU>
							<SSubBoxFontU>
								<SSubBoxFontL>멀티페르소나 세대</SSubBoxFontL>
								<li>복수의 디지털 정체성</li>
							</SSubBoxFontU>
							<SSubBoxFontU>
								<SSubBoxFontL>영상 세대</SSubBoxFontL>
								<li>시각적 정보에 민감</li>
							</SSubBoxFontU>
						</SSubBoxFontD2>
					</SSubBoxD>

					<SSubBoxD2>
						<SSubBoxFontD1>
							피할 수 없는 디지털 전환시대,
							<br />
							새로운 이론/교육/서비스 필요
						</SSubBoxFontD1>
						<SSubBoxFontD2>
							<SSubBoxFontU2>
								<SSubBoxFontL2>e세대 새로운 디지털 일상</SSubBoxFontL2>
								<SSubBoxFontL2>새로운 a 교육</SSubBoxFontL2>
								<SSubBoxFontL2>새로운 a 정책, 서비스</SSubBoxFontL2>
							</SSubBoxFontU2>
						</SSubBoxFontD2>
					</SSubBoxD2>
				</SBoxD2>
				<STitleD2>연도별 조사 실시 계획</STitleD2>
				<div>
					<img src={IMG2} alt='intro' width='95%' />
				</div>
				<STitleD2>소개자료</STitleD2>
				<a
					href='https://sookyeong-ssk.s3.ap-northeast-2.amazonaws.com/adds/Yonsei-ADDS.pdf'
					target='_blank'
					rel='noreferrer'>
					<SButtton type='button'>Yonsei ADDS PDF</SButtton>
				</a>
			</div>
		</SIntroContentContainer>
	);
}

/* container */
const SIntroContentContainer = styled.div`
	width: 99.2rem;
	height: 154rem;
`;

/* 본문 1 */
const SBoxD1 = styled.div`
	background-image: url(${IMG});
	background-repeat: no-repeat;
	background-size: cover;
	height: 19.552rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.2rem 0;
`;

const SFontP = styled.p`
	font-size: 4.3rem;
	font-weight: 750;
	color: ${Colors.white};
`;

const SFontP2 = styled.p`
	font-size: 3.4rem;
	color: ${Colors.white};
`;

/* 본문 2 */
const SBoxD2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 11rem 0 13rem 0;
	position: relative;
`;

const SCircleD = styled.div`
	width: 40rem;
	height: 40rem;
	border: 3px solid ${Colors.circle};
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: -1;
`;

const SSubBoxD = styled.div`
	background-color: ${Colors.white};
	box-shadow: 0 2rem 10rem 0 rgb(0 0 0 / 10%);
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;
	width: 38.4rem;
	height: 28.12rem;
	margin-right: 1.6rem;
`;

const SSubBoxD2 = styled.div`
	background-color: ${Colors.white};
	box-shadow: 0 2rem 10rem 0 rgb(0 0 0 / 10%);
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;
	width: 38.4rem;
	height: 28.12rem;
	margin-left: 1.6rem;
`;

const SSubBoxFontD1 = styled.div`
	padding: 1.7rem;
	text-align: center;
	line-height: 3rem;
	background-color: ${Colors.blue4};
	font-weight: 750;
	font-size: 2.1rem;
`;

const SSubBoxFontD2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2.6rem 2rem;
	width: 100%;
	font-size: 4.2rem;
`;

const SSubBoxFontU = styled.ul`
	display: flex;
	margin: 1rem 0;
	width: 33.3rem;
`;

const SSubBoxFontU2 = styled.ul`
	display: block;
	list-style: none;
	text-align: center;
	padding: 0;
	margin: 0;
`;

const SSubBoxFontL = styled.li`
	margin-right: 1.3rem;
	flex-shrink: 0;
	font-weight: 500;
	width: 14rem;
`;

const SSubBoxFontL2 = styled.li`
	margin: 2rem auto;
	font-weight: 600;
`;

/* 본문 4 */

const SButtton = styled.button`
	border: none;
	padding: 1rem 2rem;
	background-color: ${Colors.button};
	transition: 0.2s ease;
	color: ${Colors.white};
	cursor: pointer;
	margin: 0 1rem;
	display: block;
	font-size: 1.8rem;
`;

/* 제목 1, 2, 3 */

const STitleD = styled.div`
	font-size: 2.1rem;
	font-weight: 700;
	margin: 5rem 0 7rem 0;
	padding: 0.4rem 1.5rem 0.3rem 1.7rem;
	border-left: solid 0.6rem ${Colors.blue3_point};
`;

const STitleD2 = styled.div`
	font-size: 2.1rem;
	font-weight: 700;
	margin: 8rem 0 4rem 0;
	padding: 0.4rem 1.5rem 0.3rem 1.7rem;
	border-left: solid 0.6rem ${Colors.blue3_point};
`;

export default IntroContent;
