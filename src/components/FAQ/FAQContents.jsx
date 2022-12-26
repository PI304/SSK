import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import arrow from '../../assets/faqArrow.svg';

function FAQContent({ num, title, question, answer }) {
	const [visible, setVisible] = useState(false);

	const onClick = () => {
		setVisible(!visible);
	};

	return (
		<SFAQContainer>
			<STitleContainer>
				<SHead>Q {num}</SHead>
				<STitle>{title}</STitle>
			</STitleContainer>
			<SContents>
				<SQuestion>{question}</SQuestion>
				<SA>
					<SHead>A</SHead>
					<SAnswer>{answer}</SAnswer>
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
	word-break: keep-all;
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
	display: ${(props) => (props.visible ? 'block' : 'none')};
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
`;

/* 화살표 */
const SArrowImg = styled.div`
	align-self: center;

	> img {
		width: 2.2rem;
		height: 1.2rem;
	}
`;

export default FAQContent;
