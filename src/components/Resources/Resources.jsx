import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Notice/Table';
import PageButtonContainer from '../component_layout/PageButtonContainer';

function Resources() {
	const columns = ['번호', '제목', '작성자', '날짜'];

	const [items, setItems] = useState([]);
	
	useEffect(() => {
		axios.get('http://3.37.111.137:8000/data/intro')
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

export default Resources;
