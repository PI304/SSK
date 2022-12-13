import styled from 'styled-components';
import { useState } from 'react';
import IMG1 from '../../assets/envelope.svg';
import IMG2 from '../../assets/building.svg';
import IMG3 from '../../assets/phone.svg';
import IMG4 from '../../assets/pattern_contact.png';
import Colors from '../../constants/colors';

function ContactContent() {
	const [isHover, setIsHover] = useState(false);
	const onMouseEnter = () => {
		setIsHover(true);
	};
	const onMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<div>
			<SContactContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				<SInfoD>
					연구 및 데이터 관련 문의사항은 FAQ를 확인하시고
					<br />
					추가 문의사항은 연락처로 문의 바랍니다
				</SInfoD>
				<SCircleWrapperD>
					<SCircle1D isHover={isHover}>
						<div>
							<SImgI src={IMG1} alt='mail' />
						</div>
						<STextD>
							<a href='mailto:adds@yonsei.ac.kr'>adds@yonsei.ac.kr</a>
						</STextD>
					</SCircle1D>
					<SCircle2D isHover={isHover}>
						<div>
							<SImg2I src={IMG2} alt='building' />
						</div>
						<SText2D>
							<a href='https://map.naver.com/v5/search/서울시 서대문구 연세로 50 삼성관 220호'>
								(03722) 서울시 서대문구 연세로 50 삼성관 220호
							</a>
						</SText2D>
					</SCircle2D>
					<SCircle1D isHover={isHover}>
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
	&:hover {
		background-image: url(${IMG4});
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: 0 0;
		transition: 1s ease;
	}
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
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: 1s ease;
	text-align: center;
	word-break: break-all;
	padding: 1.6rem;
	background-color: ${(props) => (props.isHover ? 'white' : Colors.blue4)};
	width: ${(props) => (props.isHover ? '20.8rem' : '22.4rem')};
	height: ${(props) => (props.isHover ? '20.8rem' : '22.4rem')};
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
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: 1s ease;
	text-align: center;
	word-break: break-all;
	padding: 2.4rem;
	background-color: ${(props) => (props.isHover ? 'white' : Colors.blue4)};
	box-shadow: ${(props) => (props.isHover ? '0px 2px 10px rgb(0 0 0 / 10%)' : 'none')};
	width: ${(props) => (props.isHover ? '35.2rem' : '32rem')};
	height: ${(props) => (props.isHover ? '35.2rem' : '32rem')};
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

export default ContactContent;
