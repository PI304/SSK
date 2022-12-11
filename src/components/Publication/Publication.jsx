import { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import Header from '../component_layout/Header';
import Footer from '../component_layout/Footer';
import MainContainer from '../component_layout/MainContainer';
import STitle from '../component_layout/Title';
import SLayoutContainer from '../component_layout/LayoutContainer';

function Publication() {
	return (
		<SLayoutContainer>
			<Header />
			<MainContainer>
				<STitle>발간물</STitle>
				<div />
				<SelectWrapper>
					<SortSelect>
						<SortingSelection>
							<option>최신순 정렬</option>
						</SortingSelection>
					</SortSelect>
				</SelectWrapper>
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
	width: 7em;
	padding: 0px 2px 1px;
`;

export default Publication;
