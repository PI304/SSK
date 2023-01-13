import styled from 'styled-components';
import ReportImg from '../../assets/press.jpg';

function ReportsCotent({ title, body, url, createdDate }) {
	return (
		<SReportsWrapperD>
			<SReportsIMGD />
			<SReportsInfoD>
				<div className='title'>
					<a href={`${url}`}>{title}</a>
				</div>
				<div className='body'>{body}</div>
				<div className='date'>{createdDate}</div>
			</SReportsInfoD>
		</SReportsWrapperD>
	);
}

const SReportsWrapperD = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1.2px solid #c2c2c2;
`;

const SReportsIMGD = styled.div`
	background: url(${ReportImg}) no-repeat;
	background-size: cover;
	width: 26rem;
	height: 15.5rem;
	margin: 2.6rem 2.7rem;
	align-self: stretch;
	flex-shrink: 0;
`;

const SReportsInfoD = styled.div`
	align-self: stretch;
	display: flex;
	flex-direction: column;
	margin: 2.3rem 1.5rem;
	margin-left: 0;

	> div > a:hover {
		color: #639ae9;
		cursor: pointer;
	}

	> .title {
		font-weight: 500;
		font-size: 3.4rem;
	}

	> .body {
		padding-top: 1rem;
		overflow: hidden;
		white-space: word-break;
		font-weight: 400;
		font-size: 1.7rem;
		line-height: 2.3rem;
	}
	> .date {
		font-size: 1.3rem;
		font-weight: 350;
		margin-top: auto;
		margin-bottom: 0.2rem;
	}
`;

export default ReportsCotent;
