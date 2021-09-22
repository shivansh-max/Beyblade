import React from 'react';
import Favorite from './Favorite';

function Favorites(props) {
	return (
		<table>
			<thead>
			<th>#</th>
			<th>Prop</th>
			<th>Value</th>
			</thead>
			<tbody>
			<Favorite num={1} prop={"Food"} value={"Pizza"} />
			<Favorite num={2} prop={"Drink"} value={"Cola"} />
			<Favorite num={3} prop={"Coding Language"} value={"React"} />
			<Favorite num={4} prop={"Browser"} value={"Chrome"} />
			<Favorite num={5} prop={"Color"} value={"Red-Blue"} />
			<Favorite num={6} prop={"Subject"} value={"Math"} />
			<Favorite num={7} prop={"Music Type"} value={"Pop"} />
			<Favorite num={8} prop={"Singer"} value={"Ed Sheeran"} />
			<Favorite num={9} prop={"Tech Company"} value={"Apple"} />
			<Favorite num={10} prop={"Mode"} value={"Dark"} />
			<Favorite num={11} prop={"Restaurant"} value={"Dominoes"} />
			<Favorite num={12} prop={"Beyblade"} value={"Lord Spriggan"} />
			<Favorite num={13} prop={"Blader"} value={"Shu Koroni"} />
			</tbody>
		</table>
	);
}

export default Favorites;