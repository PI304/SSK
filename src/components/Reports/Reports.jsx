import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PageButtonContainer from '../component_layout/PageButtonContainer';
import ReportsCotent from './ReportsContent';

function Reports() {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState();
	const [size, setSize] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		axios.get(`http://3.37.111.137:8000/community/press?page=${currentPage}`).then((response) => {
			setItems(response.data.items);
			setTotal(response.data.total);
			setSize(response.data.size);
		});
	}, [currentPage]);

	return (
		<div>
			<SContainerD>
				<SelectWrapper>
					<SortSelect>
						<SortingSelection>
							<option>최신순 정렬</option>
						</SortingSelection>
					</SortSelect>
				</SelectWrapper>
				<ReportsContainer>
					{items.map((item) => (
						<div key={item.id}>
							<ReportsCotent
								title={item.title}
								body={item.body}
								url={item.url}
								createdDate={item.created_date}
							/>
						</div>
					))}
				</ReportsContainer>
			</SContainerD>
			<PageButtonContainer total={total} size={size} setCurrentPage={setCurrentPage} />
		</div>
	);
}

const ReportsContainer = styled.div`
	> div:first-of-type > div {
		border-top: 1.2px solid #767676;
	}
`;
const SContainerD = styled.div`
	width: 100%;
	margin: auto;
	box-sizing: border-box;
	word-break: break-all;
`;

const SelectWrapper = styled.div`
	position: relative;
	height: 4rem;
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
