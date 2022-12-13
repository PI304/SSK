import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SidebarInner from './SidebarInner';

function Sidebar({ nowPage }) {
	const urls = {
		intro: '../components/Intro',
		members: '../components/Members',
		research: '../components/Research',
		publication: '../components/Publication',
		resources: '../components/Resources',
		papers: '../components/Papers',
		notice: '../components/Notice',
		reports: '../components/Reports',
		FAQ: '../components/FAQ',
		contact: '../components/Contact',
	};

	const [selectedPage, setSelectedPage] = useState({ nowPage });

	const handleClick = (to) => {
		setSelectedPage(to);
	};

	return (
		<SidebarContainer>
			<SSidebarTitleD>ADDS소개</SSidebarTitleD>
			<SSidebarEntireListU>
				{/* <SidebarInner
					selectedPage={selectedPage}
					onClick={() => handleClick(urls.intro)}
					to={urls.intro}
					category='ADDS소개'
				/> */}
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.intro)}
						to={urls.intro}>
						ADDS소개
					</SSidebarLinkL>
				</SSidebarListL>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.members)}
						to={urls.members}>
						연구진소개
					</SSidebarLinkL>
				</SSidebarListL>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.research)}
						to={urls.research}>
						조사설계
					</SSidebarLinkL>
				</SSidebarListL>
			</SSidebarEntireListU>
			<SSidebarTitleD>발간물</SSidebarTitleD>
			<SSidebarEntireListU>
				<SSidebarLinkL
					selectedPage={selectedPage}
					onClick={() => handleClick(urls.publication)}
					to={urls.publication}>
					발간물
				</SSidebarLinkL>
			</SSidebarEntireListU>
			<SSidebarTitleD>데이터</SSidebarTitleD>
			<SSidebarEntireListU>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.resources)}
						to={urls.resources}>
						자료안내
					</SSidebarLinkL>
				</SSidebarListL>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.papers)}
						to={urls.papers}>
						데이터활용논문
					</SSidebarLinkL>
				</SSidebarListL>
			</SSidebarEntireListU>
			<SSidebarTitleD>소통공간</SSidebarTitleD>
			<SSidebarEntireListU>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.notice)}
						to={urls.notice}>
						공지사항
					</SSidebarLinkL>
				</SSidebarListL>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.reports)}
						to={urls.reports}>
						보도자료
					</SSidebarLinkL>
				</SSidebarListL>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.FAQ)}
						to={urls.FAQ}>
						FAQ
					</SSidebarLinkL>
				</SSidebarListL>
				<SSidebarListL>
					<SSidebarLinkL
						selectedPage={selectedPage}
						onClick={() => handleClick(urls.contact)}
						to={urls.contact}>
						contact
					</SSidebarLinkL>
				</SSidebarListL>
			</SSidebarEntireListU>
		</SidebarContainer>
	);
}

const SidebarContainer = styled.div`
	// width: 16rem;
`;

const SSidebarTitleD = styled.div`
	border-bottom: solid 1px #767676;
	padding: 1.8rem 3rem 1.8rem 1.6rem;
	// background-color: #e2edfb;
	cursor: pointer;
	font-size: 1.8rem;
	font-weight: 400;
`;

const SSidebarEntireListU = styled.ul`
	margin: 0;
	padding: 1.5rem 2rem 1.5rem 2rem;
	list-style: none;
	border-bottom: solid 1px #767676;
	transition: opacity 0.5s linear;
`;

const SSidebarListL = styled.li`
	margin: 0.8rem 0 0.8rem 0;
`;

const SSidebarLinkL = styled(Link)`
	font-size: 1.5rem;
	color: ${({ selectedPage, to }) => (selectedPage === to ? '#639ae9' : undefined)};
`;

export default Sidebar;
