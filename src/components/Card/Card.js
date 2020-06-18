import React from 'react';
import StyledCard from './StyledCard';
import Paragraph from '../Paragraph/Paragraph';

function Card({ src, title, desc, type }) {
	return (
		<StyledCard type={type}>
			<h2>{title}</h2>
			<Paragraph className='text'>{desc}</Paragraph>
			<Paragraph align='right'>
				<img src={src} alt={title + 'icon'} />
			</Paragraph>
		</StyledCard>
	);
}

export default Card;
