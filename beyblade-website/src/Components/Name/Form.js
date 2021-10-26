import React, {useState} from 'react';
import {getSearchHasbroTT} from '../../Public/Api';

function Form({setNames}) {
	const [brand, setBrand] = useState("hasbro");
	const [search, setSearch] = useState("");

	return (
		<div className={'center form'}>
			<input
				type="text"
				placeholder={'⌨'}
				value={search}
				onChange={e => {
					setSearch(e.target.value);
					getSearchHasbroTT(brand, setNames, e.target.value);
				}}
			/>
			<select name="brand" value={brand} onChange={e => {
				setBrand(e.target.value);
				getSearchHasbroTT(e.target.value, setNames, search);
			}}>
				<option value="hasbro">Hasbro</option>
				<option value="takara-tomy">Takara Tomy</option>
				<option value="both">Both</option>
			</select>
		</div>
	);
}

// onChange={
// (e) => {
// 	setSearch(e.target.value);
// 	getSearch(e.target.value, setBeyblades);
// }
// }

export default Form;