import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import styled from 'styled-components';
import FAQContents from './FAQContents';

function FAQ() {
	return (
		<FAQLayout>
			<FAQContents
				num='25'
				title='00000000프로젝트'
				question='OOOOOO프로젝트에 참여하는 사람입니다. 하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?'
				answer='OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다. 그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭 기입해주시기 바랍니다. 혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락주세요.'
			/>
			<FAQContents
				num='25'
				title='00000000프로젝트'
				question='OOOOOO프로젝트에 참여하는 사람입니다. 하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?'
				answer='OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다. 그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭 기입해주시기 바랍니다. 혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락주세요.'
			/>
			<FAQContents
				num='25'
				title='00000000프로젝트'
				question='OOOOOO프로젝트에 참여하는 사람입니다. 하루에 세 번 OOOO을 하라고 안내 받았는데, 놓친 날이 있다면 어떻게 해야할까요?'
				answer='OOOOOO프로젝트에 참여하시는 분들은 하루에 세 번 OOOO을 하시기를 권장드립니다. 그러나 놓친 날이 있는 경우엔 데일리 설문조사에서 놓친 날짜, 시간에 대한 정보를 꼭 기입해주시기 바랍니다. 혹시 설문조사에서 쓰지 않은 경우엔 reaiqwhl@yonsei.ac.kr로 연락주세요.'
			/>
		</FAQLayout>
	);
}

const FAQLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

export default FAQ;
