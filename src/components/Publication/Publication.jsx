import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PublicationContainer from './PublicationContainer';
import PageButtonContainer from '../component_layout/PageButtonContainer';

function Publication() {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState();
	const [size, setSize] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		axios.get(`http://3.37.111.137:8000/publication?page=${currentPage}`).then((response) => {
			setItems(response.data.items);
			setTotal(response.data.total);
			setSize(response.data.size);
		});
	}, [currentPage]);

	const stringToJson = (string) => {
		const file = JSON.parse(string);
		return file.length && file[0];
	};

	return (
		<div>
			<SelectWrapper>
				<SortSelect>
					<SortingSelection>
						<option>최신순 정렬</option>
					</SortingSelection>
				</SortSelect>
			</SelectWrapper>
			<PublicationWrapper>
				{items.map((item) => (
					<div key={item.id}>
						<PublicationContainer
							title={item.title}
							img={stringToJson(item.img)}
							pdf={stringToJson(item.pdf)}
							content='관리자'
						/>
					</div>
				))}
			</PublicationWrapper>
			<PageButtonContainer
				total={total}
				size={size}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
}
const PublicationWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: fit-content;
	grid-column-gap: 8rem;
	grid-row-gap: 7rem;
	margin-top: 2.563rem;
`;

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
