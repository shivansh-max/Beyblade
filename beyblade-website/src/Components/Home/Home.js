import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

function Home(props) {
	return (
		<div className="home">
			<Desktop />
			<Mobile />
		</div>
	);
}

export default Home;