import React from 'react';

function Names({names}) {
	return (
		<div className={"pods"}>
			{
				names.map(name => (
					<div className={"pod"} key={name["_id"]}>
						<h1>{name["Hasbro"]}</h1>
						<h1>{name["TT"]}</h1>
					</div>
				))
			}
		</div>
	);
}

export default Names;