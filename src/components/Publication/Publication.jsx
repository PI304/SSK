import { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import SLayoutContainer from '../component_layout/LayoutContainer';
import PublicationImage from '../../assets/2.jpg';
import PdfButton from '../../assets/pdfOn.png';

function Publication() {
	return (
		<SLayoutContainer>
			<Header />
			<MainContainer>
				<STitle>발간물</STitle>
				<div />
				<div>
					<SelectWrapper>
						<SortSelect>
							<SortingSelection>
								<option>최신순 정렬</option>
							</SortingSelection>
						</SortSelect>
					</SelectWrapper>
					<PublicationWrapper>
						<PublicationContentWrapper>
							<ImgWrapper>
								<img src={PublicationImage} width='100%' alt='library img' />
							</ImgWrapper>
							<PdfWrapper>
								<a
									href='https://s3.ap-northeast-2.amazonaws.com/sookyeong-ssk/publication/628_data.xlsx'
									cursor='pointer'>
									<img width='100%' height='100%' src={PdfButton} alt='pdf' />
								</a>
							</PdfWrapper>
							<PublicationInfoWrapper>
								<PublicationTitle>[연구 설명회] 2022년도 OO진흥원 OO</PublicationTitle>
								<PublicationContent>관리자</PublicationContent>
							</PublicationInfoWrapper>
						</PublicationContentWrapper>
					</PublicationWrapper>
				</div>
			</MainContainer>
			<Footer />
		</SLayoutContainer>
	);
}
const SelectWrapper = styled.div`
	position: relative;
	height: 2.3rem;
`;

const SortSelect = styled.div`
	position: absolute;
	right: 0;
	top: 0;
`;

const SortingSelection = styled.select`
	font-weight: normal;
	height: 1.8em;
	width: 8em;
	padding: 0px 2px 1px;
	border-radius: 0px;
	color: #767676;
	border-color: #e0e0e0;
	padding: 0.3rem;
	margin-top: 1rem;
`;

const PublicationWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: fit-content;
	grid-column-gap: 8rem;
	grid-row-gap: 7rem;
	margin-top: 2.563rem;
`;

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
}
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

export default Publication;
