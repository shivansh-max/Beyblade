import React from 'react';
import LogoIMG from './../Assets/Logo.png'


function Logo({width="", height="", className=""}) {
	return <img className={className} src={LogoIMG} alt="" width={width} height={height}/>
}

export default Logo;