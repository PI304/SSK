import styled from 'styled-components';
import Colors from '../../constants/colors';

function TopMember({ profileImg, position, name, email, homepage, phoneNum, title, work }) {
	return (
		<TopMemberCss>
			<TopMemberImgCss>
				<img src={profileImg} alt='img' />
			</TopMemberImgCss>
			<TopMemberPositionCss>{position}</TopMemberPositionCss>
			<TopMemberNameCss>{name} 교수</TopMemberNameCss>
			<TopMemberInfoBoxCss>
				<TopMemberInfoText>
					| E-mail
					<br />
					{email}
				</TopMemberInfoText>
				<TopMemberInfoText>
					| 홈페이지
					<br />
					{homepage}
				</TopMemberInfoText>
				<TopMemberInfoText>
					| 연락처
					<br />
					{phoneNum}
				</TopMemberInfoText>
			</TopMemberInfoBoxCss>
			<TopMemberWorkTextCss>
				{title}
				<br />
				{work}
			</TopMemberWorkTextCss>
		</TopMemberCss>
	);
}

const TopMemberCss = styled.div`
	width: 89.6rem;
	height: 32.7rem;
	background: ${Colors.white};
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	display: grid;
	grid-template-columns: 27.8rem 61.8rem;
	// grid-template-rows: auto 9.3rem;
	grid-template-rows: repeat(4, auto);
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 2;
`;

const TopMemberImgCss = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 100;
	> img {
		width: 27.8rem;
		height: 32.7rem;
	}
`;

const TopMemberPositionCss = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.6rem;
	width: fit-content;
	margin-left: 3.2rem;
	margin-top: 7.6rem;
	color: ${Colors.gray50};
`;

const TopMemberNameCss = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 3.4rem;
	line-height: 4.9rem;
	width: fit-content;
	margin-left: 3.2rem;
	color: ${Colors.gray50};
`;

const TopMemberInfoBoxCss = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 3.2rem;
	margin-right: 7.9rem;
	margin-top: 1.7rem;
`;

const TopMemberInfoText = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: ${Colors.gray50};
`;

const TopMemberWorkTextCss = styled.div`
	width: auto;
	height: auto;
	padding-top: 1.9rem;
	padding-bottom: 1.9rem;
	padding-left: 3.4rem;
	margin-top: 3.48rem;
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: ${Colors.gray50};
	background: ${Colors.gray};
`;

export default TopMember;
