import styled from 'styled-components';
import Colors from '../../constants/colors';

function FAQContents() {
	return (
		<SFAQContainer>
			<STitleContainer>
				<SHead>Q 25</SHead>
				<STitle>질문제목</STitle>
			</STitleContainer>
			<SContents>
				<SQuestion>
					질문여기다쓰세요질문여기다쓰세요질문여기다쓰세요질문여기다쓰세요질문여기다쓰세요질문여기다쓰세요
				</SQuestion>
				<SA>
					<SHead>A</SHead>
					<SAnswer>
						답변여기다쓰세요답변여기다쓰세요답변여기다쓰세요답변여기다쓰세요답변여기다쓰세요답변여기다쓰세요답변여기다쓰세요
					</SAnswer>
				</SA>
			</SContents>
		</SFAQContainer>
	);
}

/* 레이아웃 */
const SFAQContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

/* 본문 */
const SHead = styled.div`
	font-family: 'Arial';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 37px;
	color: ${Colors.blue3_point};
`;
const STitleContainer = styled.div`
	display: flex;
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
`;

const SContents = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
`;

const SQuestion = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 2.6rem;
	display: flex;
	align-items: center;
	color: ${Colors.black};
`;
const SA = styled.div`
	display: flex;
	flex-direction: column;
`;

const SAnswer = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: ${Colors.black};
`;

export default FAQContents;
