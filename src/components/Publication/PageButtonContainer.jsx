import styled from 'styled-components';

function PageButtonContainer() {
	return (
		<SPageButtonWrapperD>
			<SArrowButtonB>
				<SButtonSymbolS>keyboard_double_arrow_left</SButtonSymbolS>
			</SArrowButtonB>
			<SArrowButtonB>
				<SButtonSymbolS>keyboard_arrow_left</SButtonSymbolS>
			</SArrowButtonB>
			<SPageListU>
				<SPageNumL>1</SPageNumL>
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
	text-align: center;
	margin-top: 4rem;
`;

const SArrowButtonB = styled.button`
	// vertical-align: 18%;
	border: 0.9px solid #d9d9d9;
	background: #ffffff;
	cursor: pointer;
	padding: 0.2rem 0.1rem 0 0.1rem;
	margin-right: 0.2rem;
	margin-left: 0.2rem;
`;

const SButtonSymbolS = styled.span`
	@font-face {
		font-weight: 400;
	}
	font-family: 'Material Symbols Outlined';
	font-size: 1.7rem;
	opacity: 0.5;
	// font-weight: normal;
	// font-style: normal;
	// font-size: 24px;
	// line-height: 1;
	// letter-spacing: normal;
	// text-transform: none;
	// display: inline-block;
	// white-space: nowrap;
	// word-wrap: normal;
	// direction: ltr;
`;

const SPageListU = styled.ul`
	list-style: none;
	display: inline-block;
	padding: 0;
	margin: 0;
`;

const SPageNumL = styled.li`
	border-bottom: 0.5px solid #333333;
	float: left;
	margin: 0 0.4rem 0 0.4rem;
	cursor: pointer;
	font-weight: 700;
	font-size: 1.3rem;
	width: 2rem;
	padding-bottom: 0.4rem;
`;

export default PageButtonContainer;