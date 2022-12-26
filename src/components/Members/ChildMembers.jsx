import styled from 'styled-components';
import Colors from '../../constants/colors';
import KimHyeonGyeong from '../../assets/김현경 교수님.png';

function Member({ profileImg, position, name, email, homepage, phoneNum, title, work }) {
	return (
		<MemberCss>
			<SMemberImg>
				<img src={profileImg} alt='img' />
			</SMemberImg>
			<SMemberInfoContainer>
				<SMemberTitle>{position}</SMemberTitle>
				<SMemberName>{name}</SMemberName>
				<SMemberInfoBox>
					<SMemberInfoText>
						| E-mail
						<br />
						{email}
					</SMemberInfoText>
					<SMemberInfoText>
						| 홈페이지
						<br />
						{homepage}
					</SMemberInfoText>
					<SMemberInfoText>
						| 연락처
						<br />
						{phoneNum}
					</SMemberInfoText>
				</SMemberInfoBox>
			</SMemberInfoContainer>
			<SMemberWorkText>
				{title}
				<br />
				{work}
			</SMemberWorkText>
		</MemberCss>
	);
}

const MemberCss = styled.div`
	display: grid;
	grid-template-columns: 22.9rem 25.4rem;
	grid-template-rows: 26.9rem 9.3rem;
`;

const SMemberImg = styled.div`
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 2;
	> img {
		width: 22.9rem;
		height: 28.5rem;
	}
`;
const SMemberInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 4.5rem;
	margin-top: 3.1rem;
`;

const SMemberTitle = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2.3rem;
	color: ${Colors.gray50};
`;
const SMemberName = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 3rem;
	line-height: 4.3rem;
	color: ${Colors.black};
`;

const SMemberInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.6rem;
	margin-top: 1.5rem;
`;

const SMemberInfoText = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: ${Colors.black};
`;

const SMemberWorkText = styled.div`
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 3;

	padding-top: 2.3rem;
	padding-right: 8.2rem;
	padding-left: 2.9rem;
	padding-bottom: 2.3rem;

	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2.3rem;
	color: ${Colors.black};

	color: ${Colors.gray50};
	background: ${Colors.gray};
`;

export default Member;
