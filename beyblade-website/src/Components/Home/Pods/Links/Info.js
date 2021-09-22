import React from 'react';
import Link from './Link'
import HasbroLogo
	from '../../../../Assets/Logos/hasbro-logo.png';
import WikipediaLogo
	from '../../../../Assets/Logos/wikipedia-logo.png';
import FandomLogo
	from '../../../../Assets/Logos/fandom-logo.jpg';

function Info(props) {
	return (
		<div className="info">
			<div className="center">
				<h2>Info</h2>
			</div>
			<ul>
				<Link srcImg={HasbroLogo} link={"https://beyblade.hasbro.com/en-us/collect-and-compete"}/>
				<Link srcImg={WikipediaLogo} link={"https://en.wikipedia.org/wiki/Beyblade"}/>
				<Link srcImg={FandomLogo} link={"https://beyblade.fandom.com/wiki/Main_Page"}/>
			</ul>
		</div>
	);
}

export default Info;

/*
	wikipedia
	hasbro
	beyblade fandom
* */