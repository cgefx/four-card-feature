import React from 'react';
import calculator from './images/icon-calculator.svg';
import karma from './images/icon-karma.svg';
import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import Card from './components/Card/Card';

import './main.scss';

function App() {
	return (
		<div className='container'>
			<main className='main'>
				<header className='header'>
					<Heading>Reliable, efficient delivery</Heading>
					<Heading primary>Powered by Technology</Heading>
					<Paragraph align='center'>
						Our Artificial Intelligence powered tools use millions of project
						data points to ensure that your project is successful
					</Paragraph>
				</header>

				<div className='grid'>
					<div className='column'>
						<Card
							src={supervisor}
							title='Supervisor'
							desc='Monitors activity to identify project roadblocks'
							type={0}
						/>
					</div>
					<div className='column'>
						<Card
							src={teamBuilder}
							title='Team Builder'
							desc='Scans our talent network to create the optimal team for your
									project'
							type={1}
						/>
						<Card
							src={karma}
							title='Karma'
							desc='Regularly evaluates our talent to ensure quality'
							type={2}
						/>
					</div>
					<div className='column'>
						<Card
							src={calculator}
							title='Calculator'
							desc='Uses data from past projects to provide better delivery
									estimates'
							type={3}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
