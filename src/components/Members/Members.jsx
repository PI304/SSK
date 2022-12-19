import styled from 'styled-components';
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainContainer from '../component_layout/MainContainer';
import Colors from '../../constants/colors';
import STitle from '../component_layout/Title';
import KimHyeonGyeong from '../../assets/김현경 교수님.png';
import Sidebar from '../component_layout/Sidebar';
import SLayoutContainer from '../component_layout/LayoutContainer';

function Members() {
	return (
		<SLayoutContainer>
			<Header />

			<Container />

			<Footer />
		</SLayoutContainer>
	);
}

function Container() {
	return (
		<MainContainer>
			<STitle>연구진소개</STitle>
			<Sidebar />
			<Researchers />
		</MainContainer>
	);
}

function Researchers() {
	return (
		<MembersCss>
			<TopMember />
			<Member />
			<Member />
			<Member />
			<Member />
			<Member />
			<Member />
			<Member />
		</MembersCss>
	);
}

function TopMember() {
	return (
		<TopMemberCss>
			<TopMemberImgCss>
				<img src={KimHyeonGyeong} alt='img' />
			</TopMemberImgCss>
			<TopMemberTitleCss>연구책임자</TopMemberTitleCss>
			<TopMemberNameCss>김현경 교수</TopMemberNameCss>
			<TopMemberInfoBoxCss>
				<TopMemberInfoText>
					| E-mail
					<br />
					1234567@yonsei.ac.kr
				</TopMemberInfoText>
				<TopMemberInfoText>
					| 홈페이지
					<br />
					www.yonsei.ac.kr
				</TopMemberInfoText>
				<TopMemberInfoText>
					| 연락처
					<br />
					010-0000-0000
				</TopMemberInfoText>
			</TopMemberInfoBoxCss>
			<TopMemberWorkTextCss>
				연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수
				<br />
				청소년, 바이오마커 수집, 양적 연구 설계 전문성
			</TopMemberWorkTextCss>
		</TopMemberCss>
	);
}

function Member() {
	return (
		<MemberCss>
			<SMemberImg>
				<img src={KimHyeonGyeong} alt='img' />
			</SMemberImg>
			<SMemberInfoContainer>
				<SMemberTitle>연구책임자</SMemberTitle>
				<SMemberName>김현경 교수</SMemberName>
				<SMemberInfoBox>
					<SMemberInfoText>
						| E-mail
						<br />
						1234567@yonsei.ac.kr
					</SMemberInfoText>
					<SMemberInfoText>
						| 홈페이지
						<br />
						www.yonsei.ac.kr
					</SMemberInfoText>
					<SMemberInfoText>
						| 연락처
						<br />
						010-0000-0000
					</SMemberInfoText>
				</SMemberInfoBox>
			</SMemberInfoContainer>
			<SMemberWorkText>
				연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수
				<br />
				청소년, 바이오마커 수집, 양적 연구 설계 전문성
			</SMemberWorkText>
		</MemberCss>
	);
}

const MembersCss = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1.875rem;
	grid-row-gap: 8.9rem;
`;

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

const TopMemberTitleCss = styled.div`
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

export default Members;
