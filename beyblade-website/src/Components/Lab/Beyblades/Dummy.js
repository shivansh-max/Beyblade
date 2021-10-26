import React from 'react';

function Dummy(props) {
	return (
		<div className={`pod`}>
			<div className="centerc">
				<h1>{"Dummy"}</h1>
			</div>
			<div className="center">
				<div className="column r">
					<p>{"attack"}</p>
					<p>{"burst"}</p>
					<p>{'defense'}</p>
				</div>
				<div className="column l">
					<p>{"weight"}</p>
					<p>{"agility"}</p>
					<p>{"stamina"}</p>
				</div>
			</div>
		</div>
	);
}

export default Dummy;