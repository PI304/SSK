import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table';
import PageButtonContainer from '../component_layout/PageButtonContainer';

function Notice() {
	const columns = ['번호', '제목', '작성자', '날짜'];

	const [items, setItems] = useState([]);
	const [total, setTotal] = useState();
	const [size, setSize] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		axios.get(`http://3.37.111.137:8000/community/notice?page=${currentPage}`)
			.then(response => {
				setItems(response.data.items);
				setTotal(response.data.total);
				setSize(response.data.size);
			});
	}, [currentPage]);

	return (
				<div>
				 <Table columns={columns} datas={items}/>
					<PageButtonContainer total={total} size={size} setCurrentPage={setCurrentPage}/>
				</div>
	);
}

export default Notice;
