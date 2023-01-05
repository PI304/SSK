import styled from 'styled-components';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import SidebarInner from './SidebarInner';
import urls from '../../constants/Urls';

function Sidebar() {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const TitleUrl = {
		intro: [urls.intro, urls.members, urls.research],
		publication: [urls.publication],
		resources: [urls.resources, urls.papers],
		notice: [urls.notice, urls.reports, urls.FAQ, urls.contact],
	};

	const currentURL = useLocation().pathname;

	// const Accordion = styled(MuiAccordion)(({ theme }) => ({
	// 	'.MuiAccordion-root': {
	// 		boxShadow: 'none',
	// 	},
	// }));

	return (
		<div>
			<Accordion
				sx={{
					boxShadow: 'none',
				}}
				disableGutters
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}>
				<AccordionSummary
					sx={{
						padding: 0,
					}}>
					<SSidebarTitleD currentURL={currentURL} location={TitleUrl.intro} to={urls.intro}>
						ADDS소개
					</SSidebarTitleD>
				</AccordionSummary>
				<AccordionDetails>
					<SSidebarEntireListU>
						<SidebarInner to={urls.intro} category='ADDS소개' />
						<SidebarInner to={urls.members} category='연구진' />
						<SidebarInner to={urls.research} category='조사설계' />
					</SSidebarEntireListU>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					boxShadow: 'none',
				}}
				disableGutters
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}>
				<AccordionSummary
					sx={{
						padding: 0,
					}}>
					<SSidebarTitleD
						currentURL={currentURL}
						location={TitleUrl.publication}
						to={urls.publication}>
						발간물
					</SSidebarTitleD>
				</AccordionSummary>
				<AccordionDetails>
					<SSidebarEntireListU>
						<SidebarInner to={urls.publication} category='발간물' />
					</SSidebarEntireListU>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					boxShadow: 'none',
				}}
				disableGutters
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}>
				<AccordionSummary
					sx={{
						padding: 0,
					}}>
					<SSidebarTitleD currentURL={currentURL} location={TitleUrl.resources} to={urls.resources}>
						데이터
					</SSidebarTitleD>
				</AccordionSummary>
				<AccordionDetails>
					<SSidebarEntireListU>
						<SidebarInner to={urls.resources} category='자료안내' />
						<SidebarInner to={urls.papers} category='데이터활용논문' />
					</SSidebarEntireListU>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					boxShadow: 'none',
				}}
				disableGutters
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}>
				<AccordionSummary
					sx={{
						padding: 0,
						'&.MuiAccordionSummary-content': {
							margin: 0,
						},
					}}>
					<SSidebarTitleD currentURL={currentURL} location={TitleUrl.notice} to={urls.notice}>
						소통공간
					</SSidebarTitleD>
				</AccordionSummary>
				<AccordionDetails>
					<SSidebarEntireListU>
						<SidebarInner to={urls.notice} category='공지사항' />
						<SidebarInner to={urls.reports} category='보도자료' />
						<SidebarInner to={urls.FAQ} category='FAQ' />
						<SidebarInner to={urls.contact} category='contact' />
					</SSidebarEntireListU>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

const SSidebarTitleD = styled(Link)`
	border-bottom: solid 1px #767676;
	padding: 1.8rem 3rem 1.8rem 1.6rem;
	background-color: ${({ location, currentURL }) =>
		location.includes(currentURL) ? '#e2edfb' : undefined};
	cursor: pointer;
	font-size: 1.8rem;
	font-weight: 400;
	display: block;
`;

const SSidebarEntireListU = styled.ul`
	margin: 0;
	padding: 1.5rem 2rem 1.5rem 2rem;
	list-style: none;
	border-bottom: solid 1px #767676;
`;

export default Sidebar;
