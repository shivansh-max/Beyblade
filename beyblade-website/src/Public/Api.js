import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.0.23:4000',
});

function getMusic(setSongs) {
	api.get('/music').then(res => setSongs(res.data));
}

function getBeyblades(setBeyblades) {
	api.get("/beyblades").then(res => setBeyblades(res.data))
}

function getSearch(search, setBeyblades) {
	api.get(`/search?search=${search}`).then(res => setBeyblades(res.data))
}

function getNames(setNames) {
	api.get('/names').then(res => setNames(res.data))
}

function getBattle(bey1, bey2, setWinner) {
	api.get(`/battle?bey1=${bey1}&bey2=${bey2}`).then(res => setWinner(res.data.name))
}

function getSearchHasbroTT(brand, setVal, search) {
	api.get(`/names/${brand}?search=${search}`).then(res => setVal(res.data))
}

export {api, getMusic, getBeyblades, getSearch, getNames, getBattle, getSearchHasbroTT};