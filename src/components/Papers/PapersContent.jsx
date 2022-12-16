import styled from 'styled-components';
import Colors from '../../constants/colors';

function PapersContent() {
	return (
		<div>
			<SSelectContainer>
				<SSelectS>
					<option value='최신순 정렬'>최신순 정렬</option>
				</SSelectS>
			</SSelectContainer>

			<SContentContainer>
				<div>
					<SContentBox>
						<SNumberD>1</SNumberD>
						<SInfoD>
							<SInfoFontD>string</SInfoFontD>
							<SSInfoFont2D>
								string &ensp;|&ensp; string &ensp;|&ensp;
								<a href='https://string'>string</a>
							</SSInfoFont2D>
							<div />
						</SInfoD>
						<SKeyowrdsD>
							<SKeywordD>string</SKeywordD>
						</SKeyowrdsD>
					</SContentBox>
				</div>
			</SContentContainer>

			<div />
		</div>
	);
}

/* Select */
const SSelectContainer = styled.div`
	position: relative;
	height: 3.68rem;
`;

const SSelectS = styled.select`
	width: 12.8rem;
	height: 2.88rem;
	color: ${Colors.select1};
	border-color: ${Colors.select2};
	position: absolute;
	right: 0;
	top: 0;
	padding-left: 0.32rem;
`;

/* Content */
const SContentContainer = styled.div`
	margin-top: 1.6rem;
`;

const SContentBox = styled.div`
	display: grid;
	grid-template-columns: 3.2rem 1fr 28%;
	margin-bottom: 5.701rem;
	overflow: hidden;
	width: 100%;
`;

const SNumberD = styled.div`
	text-align: center;
	width: 3.2rem;
	color: ${Colors.blue3_point};
	font-weight: 500;
	font-size: 1.8rem;
`;

const SInfoD = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1.28rem;
	margin-right: 2.88rem;
`;

const SInfoFontD = styled.div`
	word-break: break-all;
	font-weight: 500;
	font-size: 1.6rem;
`;

const SSInfoFont2D = styled.div`
	margin-top: 0.301rem;
	font-weight: 350;
	font-size: 1.4rem;
`;

const SKeyowrdsD = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: flex-start;
	font-weight: 400;
	font-size: 1.4rem;
`;

const SKeywordD = styled.div`
	background-color: ${Colors.blue3_point};
	width: fit-content;
	color: ${Colors.white};
	padding: 0.24rem 1.2rem;
	border-radius: 30px;
	margin: 0.4rem 0.501rem;
	padding-bottom: 0.368rem;
`;

export default PapersContent;
