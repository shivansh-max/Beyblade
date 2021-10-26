import React from 'react';

let style = {};

function Beyblade({bey1, bey2, setBey, setBey1Set, bey1Set, id, name, attack, burst, defense, weight, agility, stamina}) {
	if (id === bey1 || id === bey2) {
		style={borderColor: "#00adef"}
	} else {
		style={}
	}

	return (
		<div className={`pod`} style={style}>
			<div className="centerc">
				<button className="center-p" onClick={() => {
					setBey(id);
					setBey1Set(!bey1Set)
					console.log(setBey1Set ? 'setBey1' : 'setBey2')
				}}>
					<h1>{name}</h1>
				</button>
			</div>
			<div className="center">
				<div className="column r">
					<p>{attack}</p>
					<p>{burst}</p>
					<p>{defense}</p>
				</div>
				<div className="column l">
					<p>{weight}</p>
					<p>{agility}</p>
					<p>{stamina}</p>
				</div>
			</div>
		</div>
	);
}

export default Beyblade;