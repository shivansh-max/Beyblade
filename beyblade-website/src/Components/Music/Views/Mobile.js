import React from 'react';
import {getMusic} from '../../../Public/Api';
import {next, prev} from '../Public/Pagination';
import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/all';
import Video from '../Public/Video';

const buttonSize = 50;

function Mobile({setSongs, currentSong, setCurrentSong, songs}) {
	return (
		<div className="mobile">
			<div className="center">
				{
					songs === undefined || songs === null? (
						<div className="button">
							<button onClick={() => getMusic(setSongs)}><h1>Fetch Songs</h1></button>
						</div>
					) : (
						<div className={"content"}>
							<div className="center">
								<Video current_song={songs[currentSong]["_id"]} />
							</div>
							<div className="center">
								<button onClick={() => prev(currentSong, setCurrentSong, songs.length)} id="prev">
									<FaRegArrowAltCircleLeft size={buttonSize}/>
								</button>
								<button onClick={() => next(currentSong, setCurrentSong, songs.length)} id="next">
									<FaRegArrowAltCircleRight size={buttonSize}/>
								</button>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default Mobile;