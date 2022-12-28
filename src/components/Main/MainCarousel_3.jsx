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
		slideRef.current.style.transform = `translateX(-${isSlide}00%)`;
	}, [isSlide]);

	return (
		<CarouselContainer>
			<div>
				<ButtonBox onClick={PrevSlide} type='button'>
					<img src={ArrowLeft} alt='arrowleft' />
				</ButtonBox>

				<SContentWindow ref={slideRef}>
					<SContentWrapper>
						<SContentBox>
							<SContentIMG src={IMG1} alt='IMG1' />
						</SContentBox>

						<SContentBox>
							<SContentIMG src={IMG2} alt='IMG2' />
						</SContentBox>

						<SContentBox>
							<SContentIMG src={IMG3} alt='IMG3' />
						</SContentBox>

						<SContentBox>
							<SContentIMG src={IMG4} alt='IMG4' />
						</SContentBox>

						<SContentBox>
							<SContentIMG src={IMG5} alt='IMG5' />
						</SContentBox>

						<SContentBox>
							<SContentIMG src={IMG1} alt='IMG1' />
						</SContentBox>
					</SContentWrapper>
				</SContentWindow>

				<ButtonBox onClick={NextSlide} type='button'>
					<img src={ArrowRight} alt='arrowright' />
				</ButtonBox>
			</div>

			<div>
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
			</div>
		</CarouselContainer>
	);
}

const CarouselContainer = styled.section`
	border: 1px solid black;
	margin-bottom: 7.6rem;
	overflow: hidden;

	// Carousel Content
	> div:first-of-type {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}

	// Circle
	> div:last-of-type {
		display: flex;
		justify-content: center;
		gap: 1.3rem;
		padding: 1.2rem 0;
	}
`;

const SContentWindow = styled.div`
	overflow: hidden;
`;

const SContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 3.45rem;
	transition: 0.3s ease;
	padding-left: 2.1rem;
`;

const ButtonBox = styled.button`
	position: relative;
	z-index: 10;
	cursor: pointer;
	height: 9.45rem;
	display: flex;
	align-items: center;
	background-color: ${Colors.white};
	border: none;
`;

const SContentBox = styled.div`
	width: 30.1rem;
	height: 9.248rem;
	flex: none;
`;

const SContentIMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const SCircleD = styled.div`
	width: 0.9rem;
	height: 0.9rem;
	border-radius: 50%;
	border: 0.1rem solid ${Colors.gray400};
`;

export default MainCarousel;
