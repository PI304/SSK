import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function SidebarInner({ to, category }) {
	const location = useLocation();

	return (
		<SSidebarListL>
			<SSidebarLinkL currentpage={location.pathname} to={to}>
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
	color: ${({ currentpage, to }) => (currentpage === to ? '#639ae9' : undefined)};
`;

export default SidebarInner;
