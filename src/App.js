import React from 'react';
import calculator from './images/icon-calculator.svg';
import karma from './images/icon-karma.svg';
import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';

import './styles/styles.scss';

function App() {
	return (
		<>
			<div className='row'>
				<header className='header'>
					<h1 className='header__text'>
						Reliable, efficient delivery
						<br />
						<span className='header__text--bold'>Powered by Technology</span>
					</h1>
					<h4 className='header__sub'>
						Our Artificial Intelligence powered tools use millions of project data points
						to ensure that your project is successful
					</h4>
				</header>
			</div>

			<main>
				<section className='row'>
					<div className='column'>
						<div className='card'>
							<div className='card__title'>
								<h2>Supervisor Monitors</h2>
							</div>
							<div className='card__text'>
								<p>activity to identify project roadblocks </p>
							</div>
							<div className='card__icon'>
								<img src={supervisor} alt='' />
							</div>
						</div>
					</div>
					<div className='column'>
						<div className='card'>
							<div className='card__title'>
								<h2>Team Builder</h2>
							</div>
							<div className='card__text'>
								<p>
									Scans our talent network to create the optimal team for your project
								</p>
							</div>
							<div className='card__icon'>
								<img src={teamBuilder} alt='' />
							</div>
						</div>
						<div className='card'>
							<div className='card__title'>
								<h2>Karma</h2>
							</div>
							<div className='card__text'>
								<p>Regularly evaluates our talent to ensure quality</p>
							</div>
							<div className='card__icon'>
								<img src={karma} alt='' />
							</div>
						</div>
					</div>
					<div className='column'>
						<div className='card'>
							<div className='card__title'>
								<h1>Calculator</h1>
							</div>
							<div className='card__text'>
								<p> Uses data from past projects to provide better delivery estimates</p>
							</div>
							<div className='card__icon'>
								<img src={calculator} alt='' />
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
