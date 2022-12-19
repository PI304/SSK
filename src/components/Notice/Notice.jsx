import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import SLayoutContainer from '../component_layout/LayoutContainer';
import Sidebar from '../component_layout/Sidebar';
import Table from './Table';

function Notice() {
	const columns = ['번호', '제목', '작성자', '날짜'];
	const datas = [{
		seq: 1,
		title: '안녕하세요 제목입니다',
		writer: '정은솔',
		date: '2022-12-15'
	},
		{
			seq: 2,
			title: '안녕하세요 제목입니다',
			writer: '정은솔',
			date: '2022-12-15'
		}
	];
	return (
		<SLayoutContainer>
			<Header />
			<MainContainer>
				<STitle>공지사항</STitle>
				 <Sidebar/>
				<Table columns={columns} datas={datas}/>
			</MainContainer>
			<Footer />
		</SLayoutContainer>
	);
}

export default Notice;
