import React from 'react';
import Youtube from './Youtube';
import Shopping from './Shopping';
import Info from './Info';

function Links(props) {
	return (
		<div className="links">
			<div className="center">
				<h1 className="title">Links</h1>
			</div>
			<Info />
			<Youtube />
			<Shopping />
		</div>
	);
}

export default Links;