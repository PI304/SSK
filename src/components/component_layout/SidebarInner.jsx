import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SidebarInner({ selectedPage, handleClick, to, category }) {
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

	// const [selectedPage, setSelectedPage] = useState({ nowPage });

	// const handleClick = (to) => {
	// 	setSelectedPage(to);
	// };

	return (
		<SSidebarListL>
			<SSidebarLinkL selectedPage={selectedPage} onClick={handleClick} to={to}>
				{category}
			</SSidebarLinkL>
		</SSidebarListL>
	);
}

const SSidebarListL = styled.li`
	margin: 0.8rem 0 0.8rem 0;
`;

const SSidebarLinkL = styled(Link)`
	font-size: 1.5rem;
	color: ${({ selectedPage, to }) => (selectedPage === to ? '#639ae9' : undefined)};
`;

export default SidebarInner;
