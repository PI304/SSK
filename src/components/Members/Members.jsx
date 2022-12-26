import styled from 'styled-components';
import KimHyeonGyeong from '../../assets/김현경 교수님.png';
import TopMember from './TopMember';
import Member from './ChildMembers';

function Members() {
	return (
		<MembersCss>
			<TopMember
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
			<Member
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
			<Member
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
			<Member
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
			<Member
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
			<Member
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
			<Member
				profileImg={KimHyeonGyeong}
				position='연구책임자'
				name='김현경 교수'
				email='1234567@yonsei.ac.kr'
				homepage='www.yonsei.ac.kr'
				phoneNum='010-0000-0000'
				title='연세대학교 아동가족학과 인간생애와 혁신적 디자인 교수'
				work='청소년, 바이오마커 수집, 양적 연구 설계 전문성'
			/>
		</MembersCss>
	);
}

const MembersCss = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1.875rem;
	grid-row-gap: 8.9rem;
`;

export default Members;
