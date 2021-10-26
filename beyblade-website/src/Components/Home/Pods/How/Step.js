import React from 'react';

function Step({className, title, p}) {
	return (
		<div className={className}>
			<h2>{title}</h2>
			<p>{p}</p>
		</div>
	);
}

export default Step;