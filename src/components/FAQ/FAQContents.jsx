import styled from 'styled-components';
import Colors from '../../constants/colors';
import arrow from '../../assets/arrow.svg';

function FAQContents() {
	return (
		<SFAQContainer>
			<STitleContainer>
				<SHead>Q 25</SHead>
				<STitle>OOOO0OO프로젝트</STitle>
			</STitleContainer>
			<SContents>
				<SQuestion>
					OOOOOO프로젝트에 참여하는 사람입니다.
					<br />
					하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?
				</SQuestion>
				<SA>
					<SHead>A</SHead>
					<SAnswer>
						OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다.
						<br />
						그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭
						기입해주시기 바랍니다. 혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락
						주세요.
					</SAnswer>
				</SA>
				<SArrowImg>
					<img src={arrow} alt='img' />
				</SArrowImg>
			</SContents>
		</SFAQContainer>
	);
}

/* 레이아웃 */
const SFAQContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 8.9rem;
`;

/* 글기호 */
const SHead = styled.div`
	font-family: 'Arial';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 37px;
	color: ${Colors.blue3_point};
`;

/* 제목 */
const STitleContainer = styled.div`
	display: flex;
	margin-left: 3rem;
	margin-bottom: 1.1rem;
`;

const STitle = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2rem;
	display: flex;
	align-items: center;
	color: ${Colors.black};

	margin-left: 0.8rem;
`;

/* 질문이랑 답변 */
const SContents = styled.div`
	display: flex;
	width: 84.9rem;
	flex-direction: column;
	justify-content: space-around;
	box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	padding-left: 3rem;
	padding-top: 3rem;
	padding-right: 3rem;
	padding-bottom: 2.6rem;
`;

const SQuestion = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 2.6rem;
	display: flex;
	align-items: center;
	padding-bottom: 2.6rem;
	color: ${Colors.black};
`;

const SA = styled.div`
	display: flex;
	flex-direction: row;
	padding-bottom: 2.7rem;
`;

const SAnswer = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: ${Colors.black};

	padding-left: 1.4rem;
<<<<<<< Updated upstream
	padding-right: 5rem;
=======
>>>>>>> Stashed changes
`;

/* 화살표 */
const SArrowImg = styled.div`
	> img {
		width: 2.2;
		height: 1.2rem;
	}
`;

export default FAQContents;
