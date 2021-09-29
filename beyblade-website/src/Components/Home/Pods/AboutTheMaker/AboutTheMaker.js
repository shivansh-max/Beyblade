import React from 'react';
import Me from "../../../../Assets/Me.jpg";
import Favorites from './Favorites';

function AboutTheMaker() {
	return (
		<div className="about-the-maker">
			<div className="center">
				<h2>Shivansh Upadhyay</h2>
			</div>
			<p>
				
				I am a 11 years old and love to code. I live in Des Moines, Iowa and go to SMS (South Middle School).
				<span className="center">
					<img src={Me} alt=""/>
				</span>
				I am indian and my favorite hobbies are coding, cooking
				skating, reading and more. My favorite sport is cricket and my favorite subject is Math, Science.
				I also love to beyblade I have about 14 beyblades and out of them my favorite beyblade is Judgment Joker.
			</p>

			<Favorites />
		</div>
	);
}

export default AboutTheMaker;