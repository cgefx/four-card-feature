import styled from 'styled-components';

const Heading = styled.h1`
	text-align: center;
	font-weight: ${(props) => (props.primary ? 600 : 200)};
	font-size: 4rem;
`;

export default Heading;
