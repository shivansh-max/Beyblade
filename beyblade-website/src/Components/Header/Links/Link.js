import React from 'react';
import {Link as RouterLink} from 'react-router-dom'

function Link({url, text}) {
	return (
		<li className="link">
			<h3 className="link">
				<RouterLink to={url}>
					{text}
				</RouterLink>
			</h3>
		</li>
	);
}

export default Link;