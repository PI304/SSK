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
		<CarouselContainer>
			<div>
				<ArrowB>
					<img src={ArrowLeft} alt='arrowleft' />
				</ArrowB>
			</div>

			<ContentContainer>
				<ContentBox>
					<ContentIMG src={IMG1} alt='IMG1' />
				</ContentBox>
				<ContentBox>
					<ContentIMG src={IMG2} alt='IMG2' />
				</ContentBox>
				<ContentBox>
					<ContentIMG src={IMG3} alt='IMG3' />
				</ContentBox>
				<ContentBox>
					<ContentIMG src={IMG4} alt='IMG4' />
				</ContentBox>
				<ContentBox>
					<ContentIMG src={IMG5} alt='IMG5' />
				</ContentBox>
			</ContentContainer>

			<div>
				<ArrowB>
					<img src={ArrowRight} alt='arrowright' />
				</ArrowB>
			</div>
		</CarouselContainer>
	);
}

const CarouselContainer = styled.div`
	width: 120rem;
	height: 20.089rem;
	padding: 0 5rem;
	display: flex;
	align-items: center;
	overflow: hidden;
`;

/* Arrow Button */
const ArrowB = styled.button`
	border: 0;
	color: black;
	background-color: transparent;
	cursor: pointer;
`;

/* Content */
const ContentContainer = styled.div`
	display: flex;
`;

const ContentBox = styled.div`
	width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const ContentIMG = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	z-index: 1;
`;

export default MainCarousel;
