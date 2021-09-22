import React, {useState} from 'react';
import {getRandomBey} from '../../../../Shared/BeybladeList';

function Mobile(props) {
	const [beyAvatar, setBeyAvatar] = useState(getRandomBey());
	const [beySpin, setBeySpin] = useState(false);

	return (
		<div className="mobile">
			<button className={"bey"} onClick={() => setBeySpin(!beySpin)}>
				<img className={beySpin ? 'spin' : ''} src={beyAvatar} alt=""/>
			</button>

			<div className="center">
				<button className="change" onClick={() => setBeyAvatar(getRandomBey())}>Change</button>
			</div>
		</div>
	);
}

export default Mobile;