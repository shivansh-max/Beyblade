import React from 'react';

function Link({srcImg, link}) {
	return (
		<li>
			<a href={link} target="_blank" rel={'noreferrer'}>
				<img src={srcImg} alt=""/>
			</a>
		</li>
	);
}

export default Link;