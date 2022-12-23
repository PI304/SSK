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
	const TOTAL_SLIDES = 4;
	const [isSlide, setIsSlide] = useState(0);
	const slideRef = useRef(null);

	// Next 버튼 클릭 시
	const NextSlide = () => {
		if (isSlide >= TOTAL_SLIDES) {
			setIsSlide(0);
		} else {
			setIsSlide(isSlide + 1);
		}
	};

	// Prev 버튼 클릭시
	const PrevSlide = () => {
		if (isSlide === 0) {
			setIsSlide(TOTAL_SLIDES);
		} else {
			setIsSlide(isSlide - 1);
		}
	};

	// Slider의 정보
	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${isSlide}00%)`;
	}, [isSlide]);

	return (
		<div>
			<CarouselContainer>
				<div>
					<SArrowB onClick={PrevSlide}>
						<img src={ArrowLeft} alt='arrowleft' width='60%' />
					</SArrowB>
				</div>

				<ContentWindow ref={slideRef}>
					<SContentWrapperD>
						<SContentBoxD>
							<a href='https://www.yonsei.ac.kr/sc/' target='_blank' rel='noreferrer'>
								<SContentIMG src={IMG1} alt='IMG1' />
							</a>
						</SContentBoxD>
						<SContentBoxD>
							<a href='https://www.nrf.re.kr/index' target='_blank' rel='noreferrer'>
								<SContentIMG src={IMG2} alt='IMG2' />
							</a>
						</SContentBoxD>
						<SContentBoxD>
							<a href='https://yonsei-impact.weebly.com/' target='_blank' rel='noreferrer'>
								<SContentIMG src={IMG3} alt='IMG3' />
							</a>
						</SContentBoxD>
						<SContentBoxD>
							<a href='http://hlid.yonsei.ac.kr/' target='_blank' rel='noreferrer'>
								<SContentIMG src={IMG4} alt='IMG4' />
							</a>
						</SContentBoxD>
						<SContentBoxD>
							<a href='http://sskn.kr/main/main.php' target='_blank' rel='noreferrer'>
								<SContentIMG src={IMG5} alt='IMG5' />
							</a>
						</SContentBoxD>
					</SContentWrapperD>
				</ContentWindow>

				<div>
					<SArrowB onClick={NextSlide}>
						<img src={ArrowRight} alt='arrowright' width='60%' />
					</SArrowB>
				</div>
			</CarouselContainer>

			<SCircleContainer>
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
			</SCircleContainer>
		</div>
	);
}

const CarouselContainer = styled.div`
	width: 120rem;
	height: 14.089rem;
	padding: 0 5rem;
	display: flex;
	align-items: center;
	overflow: hidden;
`;

/* Arrow Button */
const SArrowB = styled.button`
	border: 0;
	color: black;
	background-color: transparent;
	cursor: pointer;
`;

/* Content */
const ContentWindow = styled.div`
	width: 99.4rem;
	height: 11.449rem;
	overflow: hidden;
	display: flex;
`;

const SContentWrapperD = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6.5rem;
`;

const SContentBoxD = styled.div`
	width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const SContentIMG = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	z-index: 1;
`;

/* 캐러쉘 circle */
const SCircleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 9.6rem;
	margin: auto;
	margin-bottom: 7.2rem;
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
