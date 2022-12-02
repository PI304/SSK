import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import KimHyeonGyeong from '../../assets/김현경 교수님.png';
import Header from '../../component_layout/header';
import Footer from '../../component_layout/footer';

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
			<div />
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
			{/* <img src={KimHyeonGyeong} alt='profile' /> */}
			김현경교수님 사진 및 정보
		</TopMemberCss>
	);
}

function Member() {
	return <MemberCss>여기에 다른 분들 사진 및 정보 넣기</MemberCss>;
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
	text-align: center;
`;

const MembersCss = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1.875rem;
	grid-row-gap: 3.875rem;
`;

const TopMemberCss = styled.div`
	display: grid;
`;

const MemberCss = styled.div`
	display: grid;
`;
export default Members;
