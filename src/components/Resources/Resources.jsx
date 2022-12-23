import Table from '../Notice/Table';
import PageButtonContainer from '../component_layout/PageButtonContainer';

function Resources() {
	const columns = ['번호', '제목', '작성자', '날짜'];
	const datas = [{
		seq: 1,
		title: '안녕하세요 자료안내입니다',
		writer: '정은솔',
		date: '2022-12-15'
	},
		{
			seq: 2,
			title: '안녕하세요 자료안내입니다',
			writer: '정은솔',
			date: '2022-12-15'
		}
	];
	return (
				<div>
					<Table columns={columns} datas={datas}/>
					<PageButtonContainer/>
				</div>
	);
}

export default Resources;
