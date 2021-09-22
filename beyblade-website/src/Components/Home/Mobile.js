import React from 'react';
import TitlePod from './Pods/TitlePod';
import Simulator from './Pods/Simulator/Simulator';
import Links from './Pods/Links/Links';
import PassItOn from './Pods/PassItOn';
import AboutTheMaker from './Pods/AboutTheMaker/AboutTheMaker';
import Logo from '../../Shared/Logo';

function Mobile(props) {
	return (
		<div className="mobile">
			<Logo className={'logo'}/>
			<TitlePod/>
			<hr/>
			<Simulator />
			<hr/>
			<AboutTheMaker/>
			<hr/>
			<Links />
			<hr/>
			<PassItOn />
			<hr/>
		</div>
	);
}

export default Mobile;