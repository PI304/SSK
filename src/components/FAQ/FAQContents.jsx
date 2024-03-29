// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from 'react-accessible-accordion';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import arrow from '../../assets/faqArrow.svg';

function FAQContent({ num, title, question, answer }) {
	return (
		<SFAQContainer>
			<STitleContainer>
				<SHead>Q {num}</SHead>
				<STitle>{title}</STitle>
			</STitleContainer>
			<SSummary>
				<Accordion
					sx={{
						all: 'unset',
					}}>
					<AccordionSummary>
						<SQuestion>{question}</SQuestion>
					</AccordionSummary>
					<AccordionDetails>
						<SA>
							<SHead>A</SHead>
							<SAnswer>{answer}</SAnswer>
						</SA>
					</AccordionDetails>
				</Accordion>
				<SArrowImg>
					<img src={arrow} alt='img' />
				</SArrowImg>
			</SSummary>
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
const SSummary = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 84.9rem;
	box-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	padding-left: 3rem;
	padding-top: 3rem;
	padding-right: 3rem;
	padding-bottom: 2.3rem;
`;
const SQuestion = styled.div`
	padding-bottom: 2.1rem;
	word-break: keep-all;
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 2.6rem;
	/* align-items: center; */
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
