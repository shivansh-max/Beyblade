import React from 'react';
import BeybladeGeeks
	from '../../../../Assets/Logos/BeybladeGeeks.jpg';
import LeftBurst
	from '../../../../Assets/Logos/LeftBurst.jpg';
import Ilinnuc from '../../../../Assets/Logos/Ilinnuc.jpg';
import Zankye from '../../../../Assets/Logos/Zankye.jpg';
import BeybladeBurstOfficial from '../../../../Assets/Logos/beyblade-burst-official-logo.jpg';
import Link from './Link';

function Youtube(props) {
	return (
		<div className="youtube">
			<div className="center">
				<h2>Youtube</h2>
			</div>
			<ul>
				<Link link="https://www.youtube.com/user/BeybladeGeeks" srcImg={BeybladeGeeks} />
				<Link link="https://www.youtube.com/c/LeftBurst" srcImg={LeftBurst} />
				<Link link="https://www.youtube.com/c/ilinnuc" srcImg={Ilinnuc} />
				<Link link="https://www.youtube.com/c/zankye" srcImg={Zankye} />
				<Link link="https://www.youtube.com/c/BeybladeOfficial" srcImg={BeybladeBurstOfficial} />
			</ul>
		</div>
	);
}

export default Youtube;