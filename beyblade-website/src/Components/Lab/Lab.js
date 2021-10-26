import React, {useState} from 'react';
import Search from './Search';
import Beyblades from './Beyblades/Beyblades';
import {getBattle, getBeyblades} from '../../Public/Api';

function Lab(props) {
	const [beyblades, setBeyblade] = useState();
	const [bey1, setBey1] = useState('');
	const [bey2, setBey2] = useState('');
	const [bey1Set, setBey1Set] = useState(false)
	const [winner, setWinner] = useState('');

	return (
		<div className={"lab"}>
			{
				beyblades === null || beyblades === undefined? (
					<div className={"center button"} onClick={() => getBeyblades(setBeyblade)}>
						<button className={"fetch"}><h1>Fetch</h1></button>
					</div>
				) : (
					<div>
						<div className="center">
							<h1>Lab</h1>
						</div>
						<div className={"center"}>
							{
								bey1 !== '' && bey2 !== '' && winner === '' ?(
									<button className={"battle"}
									        onClick={() => getBattle(bey1, bey2, setWinner)}>
										Battle
									</button>
								) : <h1 className={"winner"}>{winner}</h1>
							}
						</div>
						<Search setBeyblades={setBeyblade}/>
						<Beyblades
							beyblades={beyblades}
							bey1Set={bey1Set}
							setBey1Set={setBey1Set}
							bey1={bey1}
							bey2={bey2}
							setBey2={setBey2}
							setBey1={setBey1}/>
					</div>
				)
			}
		</div>
	);
}

export default Lab;