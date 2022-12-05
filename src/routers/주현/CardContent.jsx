import styled from 'styled-components';
import WhitePattern from '../../assets/pattern_white.png';
import BluePattern from '../../assets/pattern_blue.png';

function CardContent({ outTitle, innerTitle, innerContent }) {
	return (
		<ResearchCardCss>
			<CardSpaceCss />
			<CardTitleCss>{outTitle}</CardTitleCss>
			<CardDecoCss>
				<CardDecoBoxCss />
			</CardDecoCss>
		</ResearchCardCss>
	);
}

const ResearchCardCss = styled.div`
	background-image: url(${WhitePattern});
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
	height: 15rem;
	font-size: 1.875rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	// &:hover{
	// 	background-image: url(${BluePattern});
	// 	transition: 0.5s;
	// }
	}
`;

const CardSpaceCss = styled.div`
	height: 3.5rem;
`;

const CardTitleCss = styled.div`
	padding: 0 4.5rem;
	font-size: 1.875rem;
	font-weight: 700;
`;

const CardDecoCss = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CardDecoBoxCss = styled.div`
	width: 0;
	height: 0;
	border-top: 3.5rem solid #e2edfb;
	border-right: 3.5rem solid #6e98d4;
`;

export default CardContent;
