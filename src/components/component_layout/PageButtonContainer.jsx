import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Colors from '../../constants/colors';

function PageButtonContainer({ total, size, setCurrentPage }) {

	const [pageArray, setPageArray] = useState([]);

	useEffect(() =>  {
		if(total && size){
			const pageCount = Math.ceil(parseInt(total, 10) / parseInt(size, 10));
			setPageArray([...new Array(pageCount)].map((_, i) => i + 1));
		}
	}, [total, size]);

	return (
		<SPageButtonWrapperD>
			<SArrowButtonB>
				<SButtonSymbolS>keyboard_double_arrow_left</SButtonSymbolS>
			</SArrowButtonB>
			<SArrowButtonB>
				<SButtonSymbolS>keyboard_arrow_left</SButtonSymbolS>
			</SArrowButtonB>
			<SPageListU>
				 {
					pageArray.length > 0 && pageArray.map((pageNum) => (
						<SUnselectPageNumB key={pageNum} type='button' value={pageNum} onClick={e => setCurrentPage(e.target.value)}>{pageNum}</SUnselectPageNumB>
					))
				 }
			</SPageListU>
			<SArrowButtonB>
				<SButtonSymbolS>keyboard_arrow_right</SButtonSymbolS>
			</SArrowButtonB>
			<SArrowButtonB>
				<SButtonSymbolS>keyboard_double_arrow_right</SButtonSymbolS>
			</SArrowButtonB>
		</SPageButtonWrapperD>
	);
}

const SPageButtonWrapperD = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: center;
	margin: 4rem auto 0 auto;
`;

const SArrowButtonB = styled.button`
	border: 0.9px solid #d9d9d9;
	background: #ffffff;
	cursor: pointer;
	padding: 0.2rem 0.1rem 0 0.1rem;
	margin-right: 0.2rem;
	margin-left: 0.2rem;
`;

const SButtonSymbolS = styled.span`
	@font-face {
		font-family: 'Material Symbols Outlined';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v75/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOejbd5zrDAt.woff2)
			format('woff2');
	}
	font-family: 'Material Symbols Outlined',serif;
	font-size: 1.7rem;
	opacity: 0.5;
`;

const SPageListU = styled.ul`
	list-style: none;
	display: inline-block;
	padding: 0;
	margin: 0;
`;

const SPageNumL = styled.button`
	border-bottom: 0.5px solid #333333;
	float: left;
	margin: 0 0.4rem 0 0.4rem;
	cursor: pointer;
	font-weight: 700;
	font-size: 1.3rem;
	width: 2rem;
	padding-bottom: 0.4rem;
	text-align: center;
`;

	const SUnselectPageNumB = styled.button`
		color: gray;
		border: none;
		background-color: transparent;
		float: left;
		margin: 0 0.4rem 0 0.4rem;
		cursor: pointer;
		font-weight: 700;
		font-size: 1.3rem;
		width: 2rem;
		padding-bottom: 0.4rem;
		text-align: center;
		
		:focus {
			color: ${Colors.black};
			text-decoration: underline;
		}
`;

export default PageButtonContainer;
