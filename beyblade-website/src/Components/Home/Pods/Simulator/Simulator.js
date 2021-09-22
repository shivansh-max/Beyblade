import React, {useState} from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

export default function Simulator() {

	return (
		<div className="simulator">
			<Desktop />
			<Mobile />
		</div>
	);
}
