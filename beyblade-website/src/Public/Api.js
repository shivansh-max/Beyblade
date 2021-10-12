import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.0.6:4000',
});

function getMusic(setSongs) {
	api.get('/music').then(res => {
			setSongs(res.data);
		},
	);
}

export {api, getMusic};