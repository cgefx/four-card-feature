import styled from 'styled-components';

const StyledCard = styled.section`
	background-color: white;
	border-top: ${(props) =>
		`5px solid ` +
		[
			'hsl(180, 62%, 55%)',
			'hsl(0, 78%, 62%)',
			'hsl(34, 97%, 64%)',
			'hsl(212, 86%, 64%)',
		][props.type]};
	padding: 3.2rem 4rem;
	margin: 1.6rem;
	max-width: 40rem;
	min-width: 30rem;
	box-shadow: 0 10px 40px -15px hsla(212, 86%, 64%, 0.4);
	border-radius: 8px;

	h2 {
		font-size: 1.5rem;
	}

	img {
		height: 6.4rem;
		width: 6.4rem;
	}

	.text {
		margin-bottom: 2rem;
	}
`;

export default StyledCard;
