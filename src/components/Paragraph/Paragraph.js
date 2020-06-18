import styled from 'styled-components';

const Paragraph = styled.p`
	font-weight: 400;
	margin-top: 1.6rem;
	color: hsl(229, 6%, 66%);
	font-size: 1.8rem;
	text-align: ${(props) => (props.align ? props.align : 'initial')};
`;

export default Paragraph;
