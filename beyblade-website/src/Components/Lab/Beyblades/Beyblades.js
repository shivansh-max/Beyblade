import React from 'react';
import Beyblade from './Beyblade';
import Dummy from './Dummy';

function getSet(s, a, b) {
	if (s) return a
	return b
}

function Beyblades({beyblades, bey1, setBey1, bey2, setBey2, bey1Set, setBey1Set}) {
	return (
		<div className={"pods"}>
			<Dummy />
			{
				beyblades.map(bey => (
					<Beyblade
						key={bey["_id"]}
						id={bey["_id"]}
						bey1={bey1}
						bey2={bey2}
						setBey={getSet(bey1Set, setBey2, setBey1)}
						bey1Set={bey1Set}
						setBey1Set={setBey1Set}
						name={bey["name"]}
						attack={bey["attack"]}
						burst={bey["burst"]}
						defense={bey["defense"]}
						weight={bey["weight"]}
						agility={bey["agility"]}
						stamina={bey["stamina"]}

					/>
				))
			}
		</div>
	);
}

export default Beyblades;