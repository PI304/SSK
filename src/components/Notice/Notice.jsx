import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table';
import PageButtonContainer from '../component_layout/PageButtonContainer';

function Notice() {
	const columns = ['번호', '제목', '작성자', '날짜'];
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get('http://3.37.111.137:8000/community/notice')
			.then(response => {
				setItems(response.data.items);
			});
	}, []);

	return (
				<div>
				 <Table columns={columns} datas={items}/>
					<PageButtonContainer/>
				</div>
	);
}

export default Notice;
