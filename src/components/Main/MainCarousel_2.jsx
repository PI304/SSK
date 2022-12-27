import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import IMG1 from '../../assets/logo.png';
import IMG2 from '../../assets/nrf.jpeg';
import IMG3 from '../../assets/youth.png';
import IMG4 from '../../assets/life.svg';
import IMG5 from '../../assets/ssk.png';
import ArrowRight from '../../assets/arrow_right.svg';
import ArrowLeft from '../../assets/arrow_left.svg';
import Colors from '../../constants/colors';

function MainCarousel() {
	const [isSlide, setIsSlide] = useState(0);
	const slideRef = useRef(null);

	// Next 버튼 클릭 시
	const PrevSlide = () => {
		slideRef.current.style.transition = '0.3s ease';
		setIsSlide(isSlide - 1);
		if (isSlide === 0) {
			setTimeout(() => {
				slideRef.current.style.transition = 'none';
				setIsSlide(1);
			}, 300);
		}
	};

	// Prev 버튼 클릭시
	const NextSlide = () => {
		slideRef.current.style.transition = '0.3s ease';
		setIsSlide(isSlide + 1);
		if (isSlide === 1) {
			setTimeout(() => {
				slideRef.current.style.transition = 'none';
				setIsSlide(0);
			}, 300);
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
				<SArrowBoxD>
					<SArrowB onClick={PrevSlide}>
						<img src={ArrowLeft} alt='arrowleft' width='60%' />
					</SArrowB>
				</SArrowBoxD>

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
						<SContentBoxD>
							<a href='https://www.yonsei.ac.kr/sc/' target='_blank' rel='noreferrer'>
								<SContentIMG src={IMG1} alt='IMG1' />
							</a>
						</SContentBoxD>
					</SContentWrapperD>
				</ContentWindow>

				<SArrowBoxD>
					<SArrowB onClick={NextSlide}>
						<img src={ArrowRight} alt='arrowright' width='60%' />
					</SArrowB>
				</SArrowBoxD>
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
	height: 14.089rem;
	margin: 0 4.3rem;
	display: flex;
	align-items: center;
	overflow: hidden;
`;

/* Arrow Button */
const SArrowBoxD = styled.div`
	height: 100%;
`;

const SArrowB = styled.button`
	border: 0;
	color: black;
	background-color: transparent;
	cursor: pointer;
	position: relative;
	z-index: 10;
	height: 100%;
	background-color: ${Colors.white};
`;

/* Content */
const ContentWindow = styled.div`
	width: 99.4rem;
	height: 11.449rem;
	padding-left: 1rem;
	display: flex;
`;

const SContentWrapperD = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5.8rem;
`;

const SContentBoxD = styled.div`
	width: 25.6rem;
	height: 9.248rem;
	margin: 1.101rem;
	display: flex;
	align-items: center;
`;

const SContentIMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

/* 캐러쉘 circle */
const SCircleContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.3rem;
	padding: 1.2rem 0;
	margin-bottom: 7.6rem;
`;

const SCircleD = styled.div`
	width: 0.9rem;
	height: 0.9rem;
	border-radius: 50%;
	border: 0.1rem solid ${Colors.gray400};
`;

export default MainCarousel;
