import React from 'react';

function Video({current_song}) {
	return (
		<iframe width="560" height="315"
		        src={`https://www.youtube.com/embed/${current_song}`}
		        title="YouTube video player"
		        frameBorder="0"
		        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		        allowFullScreen />
	);
}

export default Video;