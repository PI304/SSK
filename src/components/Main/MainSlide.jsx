import styled from 'styled-components';
import Colors from '../../constants/colors';
import IMG1 from '../../assets/1.jpg';
import IMG2 from '../../assets/2.jpg';
import IMG3 from '../../assets/3.jpg';
import IMG4 from '../../assets/4.jpg';
import IMG5 from '../../assets/5.jpg';
import IMG6 from '../../assets/7.jpg';

function MainSlide() {
	return (
		<SSlideContainer>
			<SContentWindow>
				<SWrapper>
					<SContentBox>
						<SIMG src={IMG1} alt='1' />
					</SContentBox>

					<SContentBox>
						<SIMG src={IMG2} alt='2' />
					</SContentBox>

					<SContentBox>
						<SIMG src={IMG3} alt='3' />
					</SContentBox>

					<SContentBox>
						<SIMG src={IMG4} alt='4' />
					</SContentBox>

					<SContentBox>
						<SIMG src={IMG5} alt='5' />
					</SContentBox>

					<SContentBox>
						<SIMG src={IMG6} alt='6' />
					</SContentBox>
				</SWrapper>
			</SContentWindow>

			<div>
				<div>알파세대, 피할 수 없는 디지털 대전환 시대</div>
				<div>
					뉴노멀 시대를 위한 혁신,
					<br />
					알파 세대 디지털 일상 종단
					<br />
					ADDS 데이터
				</div>
			</div>

			<div>
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
				<SCircleD />
			</div>
		</SSlideContainer>
	);
}

const SSlideContainer = styled.div`
	margin-bottom: 8rem;
	position: relative;

	> div:nth-child(2) {
		position: absolute;
		bottom: 22rem;
		left: 75rem;
		text-align: right;
		line-height: 3rem;

		> div:first-of-type {
			color: ${Colors.white};
			font-size: 1.8rem;
			font-weight: 500;
		}

		> div:last-of-type {
			color: ${Colors.white};
			font-size: 3.501rem;
			font-weight: 700;
			line-height: 5rem;
		}
	}

	> div:last-of-type {
		display: flex;
		gap: 1rem;
		padding: 1.2rem 0;
		position: absolute;
		bottom: 3.5rem;
		left: 6rem;
	}
`;

/* slide content */
const SContentWindow = styled.div`
	//overflow: hidden;
`;

const SWrapper = styled.div`
	display: flex;
`;

const SContentBox = styled.div`
	width: 120rem;
	height: 48rem;
	flex: none;
`;

const SIMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

/* slide text */

/* slide Circle */
const SCircleD = styled.div`
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
	border: 0.15rem solid ${Colors.white};
	background-color: ${(props) => props.isCurrent && Colors.white};
`;

export default MainSlide;
