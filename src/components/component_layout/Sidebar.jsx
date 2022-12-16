import styled from 'styled-components';
import SidebarInner from './SidebarInner';

function Sidebar() {
	const urls = {
		intro: '/Intro',
		members: '/Members',
		research: '/Research',
		publication: '/Publication',
		resources: '/Resources',
		papers: '/Papers',
		notice: '/Notice',
		reports: '/Reports',
		FAQ: '/FAQ',
		contact: '/Contact',
	};

	return (
		<div>
			<SSidebarTitleD>ADDS소개</SSidebarTitleD>
			<SSidebarEntireListU>
				<SidebarInner to={urls.intro} category='ADDS소개' />
				<SidebarInner to={urls.members} category='연구진' />
				<SidebarInner to={urls.research} category='조사설계' />
			</SSidebarEntireListU>
			<SSidebarTitleD>발간물</SSidebarTitleD>
			<SSidebarEntireListU>
				<SidebarInner to={urls.publication} category='발간물' />
			</SSidebarEntireListU>
			<SSidebarTitleD>데이터</SSidebarTitleD>
			<SSidebarEntireListU>
				<SidebarInner to={urls.resources} category='자료안내' />
				<SidebarInner to={urls.papers} category='데이터활용논문' />
			</SSidebarEntireListU>
			<SSidebarTitleD>소통공간</SSidebarTitleD>
			<SSidebarEntireListU>
				<SidebarInner to={urls.notice} category='공지사항' />
				<SidebarInner to={urls.reports} category='보도자료' />
				<SidebarInner to={urls.FAQ} category='FAQ' />
				<SidebarInner to={urls.contact} category='contact' />
			</SSidebarEntireListU>
		</div>
	);
}

const SSidebarTitleD = styled.div`
	border-bottom: solid 1px #767676;
	padding: 1.8rem 3rem 1.8rem 1.6rem;
	/* background-color: #e2edfb; */
	cursor: pointer;
	font-size: 1.8rem;
	font-weight: 400;
`;

const SSidebarEntireListU = styled.ul`
	margin: 0;
	padding: 1.5rem 2rem 1.5rem 2rem;
	list-style: none;
	border-bottom: solid 1px #767676;
	/* transition: opacity 0.5s linear; */
`;

export default Sidebar;
