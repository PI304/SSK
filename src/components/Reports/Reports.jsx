import styled from 'styled-components';
import PageButtonContainer from '../component_layout/PageButtonContainer';
import ReportsCotent from './ReportsContent';

function Reports() {
	return (
		<div>
			<SelectWrapper>
				<SortSelect>
					<SortingSelection>
						<option>최신순 정렬</option>
					</SortingSelection>
				</SortSelect>
			</SelectWrapper>
			<ReportsCotent />
			<PageButtonContainer />
		</div>
	);
}
const SelectWrapper = styled.div`
	position: relative;
	height: 2.3rem;
`;

const SortSelect = styled.div`
	position: absolute;
	right: 0;
	top: 0;
`;

const SortingSelection = styled.select`
	font-weight: normal;
	height: 1.8em;
	width: 8em;
	padding: 0px 2px 1px;
	border-radius: 0px;
	color: #767676;
	border-color: #e0e0e0;
	padding: 0.3rem;
	margin-top: 1rem;
`;
export default Reports;
