import React, {useState} from 'react';
import Desktop from './Views/Desktop';
import Mobile from './Views/Mobile';
import Thanks from './Public/Thanks';

/*
	DONE : Get Links
	DONE: Work on html markup
	DONE: Work on sass
	DONE: Button
*/

function Music(props) {
	const [songs, setSongs] = useState();
	const [currentSong, setCurrentSong] = useState(0);

	return (
		<div className="music">
			<Desktop currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs} songs={songs} />
			<Mobile currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs} songs={songs} />
			<Thanks />
		</div>
	);
}

export default Music;