import React, {useState} from 'react';
import {getRandomBey} from '../../../../Shared/BeybladeList';

function startBattle(changSpacing, setBey1Spin, setBey2Spin) {
	setBey1Spin(true);
	setBey2Spin(true);

	for (let i = 0; i < 38; i++) window.setTimeout(() => changSpacing(i), i * 10);

	window.setTimeout(() => {
		alert('Find out using the app !!!!!');
		changSpacing(0);
		setBey1Spin(false);
		setBey2Spin(false);
	}, 390);
}

function Desktop(props) {
	const [bey1Avatar, changeBey1Avatar] = useState(getRandomBey());
	const [bey2Avatar, changeBey2Avatar] = useState(getRandomBey());
	const [bey1Spin, setBey1Spin] = useState(false);
	const [bey2Spin, setBey2Spin] = useState(false);
	const [spacing, changeSpacing] = useState(3);

	const onStartBattle = () => {startBattle(changeSpacing, setBey1Spin, setBey2Spin);};

	return (
		<div className="desktop">
			<div className="center">
				<h1>Beyblade Burst Simulator</h1>
			</div>
			<div className="center control">
				<button onClick={() => changeBey1Avatar(getRandomBey())}>
					BEYBLADE
				</button>
				<button onClick={onStartBattle}>Start Battle</button>
				<button onClick={() => changeBey2Avatar(getRandomBey())}>
					BEYBLADE
				</button>
			</div>
			<div className="center">
				<div className="right">
					<button onClick={() => setBey2Spin(!bey2Spin)}>
						<img
							style={{right: `${spacing}%`}} src={bey2Avatar}
							alt="" className={`bey ${bey2Spin ? 'spin' : ''}`}/>
					</button>
				</div>
				<div className="left">
					<button onClick={() => setBey1Spin(!bey1Spin)}>
						<img
							style={{left: `${spacing}%`}} src={bey1Avatar}
							alt="" className={`bey ${bey1Spin ? 'spin' : ''}`}/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Desktop;