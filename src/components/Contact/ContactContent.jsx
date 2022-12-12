import styled from 'styled-components';
import IMG1 from '../../assets/envelope.svg';
import IMG2 from '../../assets/building.svg';
import IMG3 from '../../assets/phone.svg';
import Colors from '../../constants/colors';

function ContactContent() {
	return (
		<div>
			<SContactContainer>
				<SInfoD>
					연구 및 데이터 관련 문의사항은 FAQ를 확인하시고
					<br />
					추가 문의사항은 연락처로 문의 바랍니다
				</SInfoD>
				<SCircleWrapperD>
					<SCircle1D>
						<div>
							<SImgI src={IMG1} alt='mail' />
						</div>
						<STextD>
							<a href='mailto:adds@yonsei.ac.kr'>adds@yonsei.ac.kr</a>
						</STextD>
					</SCircle1D>
					<SCircle2D>
						<div>
							<SImg2I src={IMG2} alt='building' />
						</div>
						<SText2D>
							<a href='https://map.naver.com/v5/search/서울시 서대문구 연세로 50 삼성관 220호'>
								(03722) 서울시 서대문구 연세로 50 삼성관 220호
							</a>
						</SText2D>
					</SCircle2D>
					<SCircle1D>
						<div>
							<SImgI src={IMG3} alt='phone' />
						</div>
						<STextD>
							<a href='tel:01026733149'>010 - 2673 - 3149</a>
						</STextD>
					</SCircle1D>
				</SCircleWrapperD>
			</SContactContainer>
		</div>
	);
}

const SContactContainer = styled.div`
	background-color: ${Colors.white};
	transition: 1s ease;
`;

/* 본문 1 */

const SInfoD = styled.div`
	text-align: center;
	font-size: 2.016rem;
	font-weight: 500;
	line-height: 2.88rem;
	padding: 13.301rem 0 11.6rem 0;
	transition: 1s ease;
`;

/* 본문 2 */

const SCircleWrapperD = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 16rem;
`;

/* 본문 2 (원 1) */
const SCircle1D = styled.div`
	margin: 0 1.6rem;
	width: 22.4rem;
	height: 22.4rem;
	border-radius: 50%;
	background-color: ${Colors.blue4};
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: 1s ease;
	text-align: center;
	word-break: break-all;
	padding: 1.6rem;
`;

const SImgI = styled.img`
	width: 29%;
`;

const STextD = styled.div`
	margin-bottom: 1.6rem;
	font-weight: 500;
	font-size: 3.2rem;
	transition: 1s ease;
`;

/* 본문 2 (원 2) */
const SCircle2D = styled.div`
	width: 32rem;
	height: 32rem;
	border-radius: 50%;
	background-color: ${Colors.blue4};
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: 1s ease;
	text-align: center;
	word-break: break-all;
	padding: 2.4rem;
`;

const SImg2I = styled.img`
	width: 35%;
	margin-bottom: 1.6rem;
`;

const SText2D = styled.div`
	font-weight: 500;
	font-size: 2.9rem;
	transition: 1s ease;
`;

const SText3D = styled.div`
	font-size: 2rem;
`;
export default ContactContent;
