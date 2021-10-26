import React, {useState} from 'react';
import {getNames} from '../../Public/Api';
import Names from './Names';
import Form from './Form';

function Name(props) {
	const [names, setNames] = useState();

	return (
		<div className={"names"}>

			{
				names === undefined || names === null ? (
					<div className={"center-fetch"}>
						<button onClick={() => getNames(setNames)} className={"fetch"}>
							Fetch
						</button>
					</div>
				) : (
					<div>
						<div className="center">
							<h1>Names</h1>
						</div>
						<Form setNames={setNames}/>
						<Names names={names} />
					</div>
				)
			}
		</div>
	);
}

export default Name;