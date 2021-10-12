import React from 'react';
import Logo from '../../Public/Logo';
import AboutTheMaker from './Pods/AboutTheMaker/AboutTheMaker';
import TitlePod from './Pods/TitlePod';
import Simulator from './Pods/Simulator/Simulator';
import Links from './Pods/Links/Links';
import PassItOn from './Pods/PassItOn';

function Desktop(props) {
	return (
		<div className="desktop">
			<div className="center">
				<Logo className={'logo'}/>
			</div>

			<div className={'pods'}>
				<AboutTheMaker/>

				<div className="main_content">
					<TitlePod/>
					<Simulator />
					<Links />
					<PassItOn />
				</div>
			</div>
		</div>
	);
}

export default Desktop;