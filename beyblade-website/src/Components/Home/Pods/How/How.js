import React from 'react';
import Step from './Step';
import steps from './Steps'

function How(props) {
	return (
		<div className={'how'}>
			<div className="center">
				<h1>{'<How />'}</h1>
			</div>

			<div className="center">
				<h3>STACK : MERN</h3>
			</div>

			<div className="center">
				<h4>MongoDB Express React Node</h4>
			</div>

			{
				steps.map(step => (
					<Step className={step.className} title={step.title} p={step.p} key={step.className} />
				))
			}
		</div>
	);
}

export default How;