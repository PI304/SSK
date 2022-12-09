import styled from 'styled-components';
import Header from '../../component_layout/header';
import Footer from '../../component_layout/footer';
import KimHyeonGyeong from '../../assets/김현경 교수님.png';

function Members() {
	return (
		<LayoutContainerCss>
			<Header />

			<Container />

			<Footer />
		</LayoutContainerCss>
	);
}

const LayoutContainerCss = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
`;

function Container() {
	return (
		<ContainerCss>
			<div />
			<Title />
			<Sidebar />
			<Researchers />
		</ContainerCss>
	);
}

function Title() {
	return <TitleCss>연구진소개</TitleCss>;
}

function Sidebar() {
	return <div>여기는 사이드바</div>;
}

function Researchers() {
	return (
		<MembersCss>
			<TopMember />
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
			<TopMemberGapCss />
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
	return <MemberCss> 여기 정보</MemberCss>;
}

const ContainerCss = styled.div`
	width: 75rem;
	margin: 3rem auto;
	margin-bottom: 6rem;
	display: grid;
	grid-template-columns: 10rem 62rem;
	grid-gap: 3rem;
`;

const TitleCss = styled.div`
	text-align: center;
	color: #33333;
	width: 19.3rem;
	height: 5.8rem;
	font-weight: 400;
	font-size: 4rem;
	line-height: 5.8rem;
`;

const MembersCss = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1.875rem;
	grid-row-gap: 3.875rem;
`;

const TopMemberCss = styled.div`
	width: 89.3rem;
	height: 32.7rem;

	background: #FFFFFF;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

	display: grid;
	grid-template-columns: 27.8rem 61.5rem;
	// grid-template-rows: auto 9.3rem;
	grid-template-rows: repeat(4, auto);
    column-gap: 3.2rem;

	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 2;
}
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
	font-weight: 40rem;
	font-size: 1.8rem;
	line-height: 2.6rem;
	color: #333333;
`;

const TopMemberNameCss = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 70rem;
	font-size: 3.4rem;
	line-height: 4.9rem;
	color: #333333;
`;

const TopMemberGapCss = styled.div`
	height: 7.6rem;
`;
const TopMemberInfoCss = styled.div`
	border: 2px solid yellow;
	grid-column-start: 2;
	grid-column-end: 3;
`;

const TopMemberInfoBoxCss = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TopMemberInfoText = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 40rem;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: #333333;
`;

const TopMemberWorkTextCss = styled.div`
	width: 41.8rem;
	height: 5.3rem;

	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 40rem;
	font-size: 1.8rem;
	line-height: 2.6rem;

	color: #333333;
	width: 615px;

	background: #e4e9f0;
`;

const MemberCss = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	border: 1px solid gray;
`;

const InfoContainerCss = styled.div`
	border: 1px solid gray;
`;
export default Members;
