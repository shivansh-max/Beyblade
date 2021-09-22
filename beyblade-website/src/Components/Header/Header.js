import React, {useState} from 'react';
import Links from "./Links/Links";
import {IoFastFood, IoFastFoodOutline} from "react-icons/all";
import Logo from "../../Shared/Logo";

function Header(props) {
	const [open, setOpen] = useState(false);
	
	return (
		<nav className="navbar">
			<Logo className="logo"/>
			<Links open={open}/>
			<div className="user_login_signup">
				<button><h1>Login</h1></button>
			</div>
			<div className="toggle-button">
				<button className='toggle-button' onClick={() => setOpen(!open)}>
					{open ? <IoFastFoodOutline /> : <IoFastFood />}
				</button>
			</div>
		</nav>
	);
}

export default Header;