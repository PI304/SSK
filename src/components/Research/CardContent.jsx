import styled, { keyframes } from 'styled-components';
import WhitePattern from '../../assets/pattern_white.png';
import BluePattern from '../../assets/pattern_blue.png';

function CardContent({
	outTitle,
	innerTitle,
	innerContent,
	over = false,
	under = true,
	onMouseOver,
	onMouseOut,
}) {
	return (
		<ResearchCardCss onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
			{under && (
				<>
					<CardSpaceCss />
					<CardTitleCss>{outTitle}</CardTitleCss>
					<CardDecoCss>
						<CardDecoBoxCss />
					</CardDecoCss>
				</>
			)}
			{over && (
				<InnerCss>
					<CardInnerTitle>{innerTitle}</CardInnerTitle>
					<CardInnerContent>{innerContent}</CardInnerContent>
				</InnerCss>
			)}
		</ResearchCardCss>
	);
}
const content = keyframes`
	from {
	  opacity: 0;
	}
	to {
	  opacity: 1;
	}
`;

const ResearchCardCss = styled.div`
	background-image: url(${WhitePattern});
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
	height: 24rem;
	font-size: 3rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		background-image: url(${BluePattern});
		transition: 0.5s ease-out;
	}
	position: realative;
`;

const CardSpaceCss = styled.div`
	height: 5.5rem;
`;

const CardTitleCss = styled.div`
	padding: 0 7rem;
	font-size: 3rem;
	font-weight: 700;
`;

const CardDecoCss = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CardDecoBoxCss = styled.div`
	width: 0;
	height: 0;
	border-top: 5.5rem solid #e2edfb;
	border-right: 5.5rem solid #6e98d4;
`;

const CardInnerTitle = styled.div`
	padding: 2.5rem 0 0.5rem 3rem;
	font-size: 2rem;
	font-weight: 700;
	color: #e2edfb;
	animation: ${content} 0.5s;
`;

const CardInnerContent = styled.div`
	padding: 1rem 5rem 3rem 4.5rem;
	font-size: 1.5rem;
	font-weight: 600;
	animation: ${content} 0.5s;
`;

const InnerCss = styled.div`
	padding: 3rem;
`;
export default CardContent;
