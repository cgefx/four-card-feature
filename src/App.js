import React from 'react';
import calculator from './images/icon-calculator.svg';
import karma from './images/icon-karma.svg';
import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';

import './styles/styles.scss';

function App() {
	return (
		<div className='container'>
			<div className='column flex-center'>
				<header className='header'>
					<h1 className='header__text'>
						Reliable, efficient delivery
						<div className='header__text--bold'>Powered by Technology</div>
					</h1>
					<h4 className='header__text--sub'>
						Our Artificial Intelligence powered tools use millions of project data points
						to ensure that your project is successful
					</h4>
				</header>
			</div>

			<main>
				<div className='section'>
					<div className='row'>
						{/* Column 1 */}
						<div className='column flex-center'>
							<div className='column card card--cyan'>
								<div className='card__title'>
									<h2>Supervisor</h2>
								</div>
								<div className='card__text'>
									<p className='paragraph'>
										Monitors activity to identify project roadblocks{' '}
									</p>
								</div>
								<div className='card__icon'>
									<img src={supervisor} alt='' />
								</div>
							</div>
						</div>
						{/* Column 2 */}
						<div className='column flex-center'>
							<div className='column  card card--red'>
								<div className='card__title'>
									<h2>Team Builder</h2>
								</div>
								<div className='card__text'>
									<p className='paragraph'>
										Scans our talent network to create the optimal team for your project
									</p>
								</div>
								<div className='card__icon'>
									<img src={teamBuilder} alt='' />
								</div>
							</div>
							<div className='column card card--orange'>
								<div className='card__title'>
									<h2>Karma</h2>
								</div>
								<div className='card__text'>
									<p className='paragraph'>
										Regularly evaluates our talent to ensure quality
									</p>
								</div>
								<div className='card__icon'>
									<img src={karma} alt='' />
								</div>
							</div>
						</div>
						{/* Column 3 */}
						<div className='column flex-center'>
							<div className='column  card card--blue'>
								<div className='card__title'>
									<h2>Calculator</h2>
								</div>
								<div className='card__text'>
									<p className='paragraph'>
										Uses data from past projects to provide better delivery estimates
									</p>
								</div>
								<div className='card__icon'>
									<img src={calculator} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
