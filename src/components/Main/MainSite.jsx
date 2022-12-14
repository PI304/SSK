import styled from 'styled-components';
import CSite1 from './Hover1';
import CSite2 from './Hover2';
import CSite3 from './Hover3';
import CSite4 from './Hover4';

function MainSite() {
	return (
		<SMainSiteContainer>
			<CSite1 />

			<CSite2 />

			<CSite3 />

			<CSite4 />
		</SMainSiteContainer>
	);
}

/* MainSite container */
const SMainSiteContainer = styled.div`
	display: flex;
	padding-bottom: 10rem;
	align-items: center;
	justify-content: space-between;
`;

export default MainSite;
