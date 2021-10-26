import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

function Error404(props) {
	return (
		<div className={"error404 center"}>
			<h1>Error</h1>
			<h1>404</h1>
			<h3 className="link">
				<RouterLink to={"/home"}>
					# Back to the homepage #
				</RouterLink>
			</h3>
		</div>
	);
}

export default Error404;