import React, {useState} from 'react';
import {getSearch} from '../../Public/Api';

function Search({setBeyblades}) {
	const [search, setSearch] = useState("");

	return (
		<div className={"center form"}>
			<input
				type="text"
				placeholder={"⌨"}
				value={search}
				onChange={
					(e) => {
						setSearch(e.target.value);
						getSearch(e.target.value, setBeyblades)
					}
				}/>
		</div>
	);
}

export default Search;