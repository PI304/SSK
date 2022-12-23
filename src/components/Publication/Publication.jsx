import styled from 'styled-components';
import PublicationContainer from './PublicationContainer';
import PageButtonContainer from '../component_layout/PageButtonContainer';

function Publication() {
	return (
			<div>
				<SelectWrapper>
					<SortSelect>
						<SortingSelection>
							<option>최신순 정렬</option>
						</SortingSelection>
					</SortSelect>
				</SelectWrapper>
				<PublicationContainer title='[연구 설명회] 2022년도 OO진흥원 OO' content='관리자' />
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

export default Publication;
