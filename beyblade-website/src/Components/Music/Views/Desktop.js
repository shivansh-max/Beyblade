import React from 'react';
import {getMusic} from '../../../Public/Api';
import {next, prev} from '../Public/Pagination';
import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/all';
import Video from '../Public/Video';

const buttonSize = 105;

function Desktop({setSongs, currentSong, setCurrentSong, songs}) {
	return (
		<div className="desktop">
			<div className="center">
				{
					songs === undefined || songs === null? (
						<div className="button">
								<button className={"fetch"} onClick={() => getMusic(setSongs)}>
									<h1>Fetch Songs</h1>
								</button>
						</div>
					) : (
						<div className={"content"}>
							<button onClick={() => prev(currentSong, setCurrentSong, songs.length)} id="prev">
								<FaRegArrowAltCircleLeft size={buttonSize}/>
							</button>
							<Video current_song={songs[currentSong]["_id"]} />
							<button onClick={() => next(currentSong, setCurrentSong, songs.length)} id="next">
								<FaRegArrowAltCircleRight size={buttonSize}/>
							</button>
						</div>
					)
				}
			</div>

		</div>
	);
}

export default Desktop;