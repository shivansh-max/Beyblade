import React, {useState} from 'react';
import {getMusic} from '../../Public/Api';
import {next, prev} from './Pagination';
import Video from './Video';

function Music(props) {
	const [songs, setSongs] = useState();
	const [currentSong, setCurrentSong] = useState(0);


	return (
		<div className="music">
			<button onClick={() => prev(currentSong, setCurrentSong, songs.length)}>-</button>
			{
				songs === undefined || songs === null ? (
					<div className="center">
						<button onClick={() => getMusic(setSongs)}><h1>Fetch Songs</h1></button>
					</div>
				) : <Video current_song={songs[currentSong]["_id"]} />
			}
			<button onClick={() => next(currentSong, setCurrentSong, songs.length)}>+</button>
		</div>
	);
}

export default Music;

/*
	DONE : Get Links
	DONE: Work on html markup
	TODO: Work on sass
	TODO: Button
*/
