import styled from 'styled-components';
import PdfButton from '../../assets/pdfOn.png';

function PublicationContainer({ title, content, img, pdf }) {
	return (
		<PublicationContentWrapper>
			<ImgWrapper>
				<img
					src={`https://s3.ap-northeast-2.amazonaws.com/sookyeong-ssk/publication/${img.key}`}
					width='100%'
					alt='library img'
				/>
			</ImgWrapper>
			<PdfWrapper>
				<a
					href={`https://s3.ap-northeast-2.amazonaws.com/sookyeong-ssk/publication/${pdf.key}`}
					cursor='pointer'>
					<img width='100%' height='100%' src={PdfButton} alt='pdf' />
				</a>
			</PdfWrapper>
			<PublicationInfoWrapper>
				<PublicationTitle>{title}</PublicationTitle>
				<PublicationContent>{content}</PublicationContent>
			</PublicationInfoWrapper>
		</PublicationContentWrapper>
	);
}

const PublicationContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 20rem 6.4rem;
	grid-column-gap: 1rem;
	align-items: flex-end;
`;

const ImgWrapper = styled.div`
	height: 27rem;
	display: flex;
`;

const PdfWrapper = styled.div`
	height: 3rem;
	display: flex;
`;

const PublicationInfoWrapper = styled.div``;

const PublicationTitle = styled.div`
	width: 20rem;
	font-size: 1.6rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	margin-top: 1.2rem;
`;

const PublicationContent = styled.div`
	font-size: 1.2em;
	font-weight: 350;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	margin-top: 1rem;
	padding-left: 0.2rem;
`;

export default PublicationContainer;
