import styled from 'styled-components';
import ReportImg from '../../assets/press.jpg';

function ReportsCotent() {
	return (
		<SReportsWrapperD>
			<SReportsIMGD />
		</SReportsWrapperD>
	);
}

const SReportsWrapperD = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #c2c2c2;

	& > div {
		border-top: 1px solid #767676;
	}
`;

const SReportsIMGD = styled.div`
	background: url(${ReportImg}) no-repeat;
	background-size: cover;
	width: 26rem;
	height: 15.5rem;
	/* text-align: center; */
	/* background-color: #d9d9d9; */
	margin: 3rem 2.7rem;
	/* align-self: stretch; */
	/* flex-shrink: 0; */
`;

export default ReportsCotent;
