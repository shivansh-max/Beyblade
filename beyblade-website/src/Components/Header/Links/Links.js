import React from 'react';
import Link from "./Link";

function Links({open}) {
	return (
		<ul className={`links ${open ? 'open' : ''} `}>
			<Link url={'/home'} text={'Home'}/>
			<Link url={'/music'} text={'Music'}/>
			<Link url={'/names'} text={'Names'}/>
			<Link url={'/lab'} text={'Lab'}/>
			<li id="mobile-Login">
				<div className="user_login_signup">
					<button><h1>Login</h1></button>
				</div>
			</li>
		</ul>
	);
}

export default Links;