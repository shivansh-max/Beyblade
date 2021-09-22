import React from 'react';

function Favorite({num, value, prop}) {
	return (
		<tr>
			<td>{num}</td>
			<td>{prop}</td>
			<td>{value}</td>
		</tr>
	);
}

export default Favorite;