import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG from '../../assets/pattern_blue.png';

function IntroContent() {
	return (
		<IntroContentContainer>
			<div>
				<div>
					<IntroBox1>
						<IntroFont>ADDS</IntroFont>
						<IntroFont2>Alpha generation Digital Daily Survey</IntroFont2>
					</IntroBox1>
				</div>

				<div>
					<IntroTitle1>알파 세대에 대한 새로운 이해의 필요성</IntroTitle1>

					<IntroBox2>
						<Circle />
						<IntroSubBox>
							<IntroSubBoxFont1>
								A세대의 시작,
								<br />
								그리고 COVID_19 펜데믹
							</IntroSubBoxFont1>
							<div>
								<ul>
									<li>언택트 세대</li>
									<li>비대면 선호도 증가</li>
								</ul>
								<ul>
									<li>초연결 세대</li>
									<li>24시간 정보, 또래관계 연결</li>
								</ul>
								<ul>
									<li>멀티페르소나 세대</li>
									<li>복수의 디지털 정체성</li>
								</ul>
								<ul>
									<li>영상 세대</li>
									<li>시각적 정보에 민감</li>
								</ul>
							</div>
						</IntroSubBox>

						<IntroSubBox>
							<IntroSubBoxFont1>
								피할 수 없는 디지털 전환시대,
								<br />
								새로운 이론/교육/서비스 필요
							</IntroSubBoxFont1>
							<div>
								<ul>
									<li>e세대 새로운 디지털 일상</li>
									<li>새로운 a 교육</li>
									<li>새로운 a 정책, 서비스</li>
								</ul>
							</div>
						</IntroSubBox>
					</IntroBox2>
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</IntroContentContainer>
	);
}

/* container */
const IntroContentContainer = styled.div`
	width: 99.2rem;
	height: 154rem;
`;

/* 본문 1 */
const IntroBox1 = styled.div`
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

const IntroFont = styled.p`
	font-size: 4.3rem;
	font-weight: 750;
	color: ${Colors.white};
`;

const IntroFont2 = styled.p`
	font-size: 3.4rem;
	color: ${Colors.white};
`;

/* 제목 1 */
const IntroTitle1 = styled.div`
	font-size: 2.1rem;
	font-weight: 700;
	margin: 5rem 0 7rem 0;
	padding: 0.4rem 1.5rem 0.3rem 1.7rem;
	border-left: solid 0.6rem ${Colors.blue3_point};
`;

/* 본문 2 */
const IntroBox2 = styled.div`
	display: flex;
	justify-content: center;
	margin: 11rem 0 13rem 0;
`;

const Circle = styled.div`
	width: 40rem;
	height: 40rem;
	border: 0.3rem solid ${Colors.circle};
	border-radius: 50%;
	position: absolute;
	top: 70%;
	left: 58%;
	transform: translate(-50%, -50%);
	z-index: -1;
`;

const IntroSubBox = styled.div`
	background-color: ${Colors.white};
	box-shadow: 0 2rem 10rem 0 rgb(0 0 0 / 10%);
	position: relative;
	z-index: 0;
	display: flex;
	flex-direction: column;
	width: 38.4rem;
	height: 28.119rem;
`;

const IntroSubBoxFont1 = styled.div`
	padding: 1.5rem;
	text-align: center;
	line-height: 3rem;
	background-color: ${Colors.blue4};
	font-weight: 750;
	font-size: 2.1rem;
`;
/* 제목 2 */

/* 본문 3 *

/* 제목 3 */

/* 본문 4 */
export default IntroContent;
