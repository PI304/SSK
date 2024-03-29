import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import IMG1 from '../../assets/logo.png';
import IMG2 from '../../assets/nrf.jpeg';
import IMG3 from '../../assets/youth.png';
import IMG4 from '../../assets/life.svg';
import IMG5 from '../../assets/ssk.png';
import ArrowRight from '../../assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png';
import ArrowLeft from '../../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.png';
import Colors from '../../constants/colors';

function MainCarousel() {
	return (
		<MainCarouselContainer>
			<SCarouselContainer>
				<SCarouselBoxD>
					<SImgBoxD>
						<a href='https://yonsei.ac.kr/sc/' target='_blank' rel='noreferrer'>
							<SIMGI src={IMG1} alt='IMG1' />
						</a>
					</SImgBoxD>
					<SImgBox2D>
						<a href='https://www.nrf.re.kr/index' target='_blank' rel='noreferrer'>
							<SIMGI src={IMG2} alt='IMG2' />
						</a>
					</SImgBox2D>
					<SImgBox3D>
						<a href='https://yonsei-impact.weebly.com/' target='_blank' rel='noreferrer'>
							<SIMGI src={IMG3} alt='IMG3' />
						</a>
					</SImgBox3D>
					<SImgBox4D>
						<a href='https://yonsei-impact.weebly.com/' target='_blank' rel='noreferrer'>
							<SIMGI src={IMG4} alt='IMG4' />
						</a>
					</SImgBox4D>
					<SImgBox5D>
						<a href='https://yonsei-impact.weebly.com/' target='_blank' rel='noreferrer'>
							<SIMGI src={IMG5} alt='IMG5' />
						</a>
					</SImgBox5D>
				</SCarouselBoxD>
			</SCarouselContainer>

			<SArrowContainer>
				<SArrowBoxD>
					<SArrowButtonB>
						<span>
							<img src={ArrowLeft} alt='Arrowleft' width='60%' />
						</span>
					</SArrowButtonB>
					<SArrowButtonB>
						<span>
							<img src={ArrowRight} alt='Arrowright' width='60%' />
						</span>
					</SArrowButtonB>
				</SArrowBoxD>
			</SArrowContainer>

			<SCircleContainer>
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
			</SCircleContainer>
		</MainCarouselContainer>
	);
}

const MainCarouselContainer = styled.div`
	position: relative;
	margin: 3.2rem 4.8rem;
	width: 110.4rem;
	height: 20.089rem;
`;

/* 캐러쉘 박스 */
const SCarouselContainer = styled.div`
	padding: 3.2rem 8rem 1.6rem 8rem;
	transition: all 1s;
	overflow: hidden;
`;

const SCarouselBoxD = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 3rem;
`;

const SImgBoxD = styled.div`
	min-width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const SImgBox2D = styled.div`
	min-width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const SImgBox3D = styled.div`
	min-width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const SImgBox4D = styled.div`
	min-width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
`;

const SImgBox5D = styled.div`
	min-width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const SIMGI = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	position: relative;
	z-index: 1;
`;

/* 캐러쉘 버튼 */
const SArrowContainer = styled.div`
	position: absolute;
	width: 100%;
	top: 7rem;
`;

const SArrowBoxD = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SArrowButtonB = styled.button`
	border: 0;
	color: black;
	background-color: transparent;
	cursor: pointer;
	padding: 1px 6px;
`;

/* 캐러쉘 circle */
const SCircleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 9.6rem;
	margin: auto;
	margin-bottom: 3.2rem;
`;

const SCircleD = styled.div`
	border: 1px solid ${Colors.black};
	border-radius: 50%;
	width: 0.64rem;
	height: 0.64rem;
`;

const SBlackCircleD = styled.div`
	background-color: ${Colors.black};
`;

export default MainCarousel;
