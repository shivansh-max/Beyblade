// Imports
require('dotenv').config();
const axios = require('axios');
const api_url = process.env.API_URL;

const shu_id = 'ArgL1meG';

axios.get(`${api_url}beyblades`).then(res => console.table(res.data));

axios.get(`${api_url}search?search=FAF`).then(res => console.table(res.data));

// This user is !in the database
axios.post(`${api_url}users`, {
	_id: 'x',
	nickname: 'x',
	password: 'x',
	gender: 'x',
	color: '#000000',
	mail: 'x',
	phone: 123123123123,
	contacts: []
}).then(res => console.log(res.data));

axios.get(`${api_url}users/auth?user=Shu Kurenai&password=Spryzen`).then(
	res => console.log(res.data),
	err => console.error(err.data)
);

axios.get(`${api_url}users/contacts?id=${shu_id}`).then(res => console.log(res.data), err => console.error(err.data));

axios.get(`${api_url}users/contacts/add?user_id=${shu_id}&new_contact_id=GRAY1meG'`)
	.then(
		res => console.log(res.data),
		err => console.error(err.data)
	);

const data = {
	"users": [shu_id, "ArgL1meH", "ArgY7meG", "GRAY5meG", "GRAY0meG", "GRAY1meG"]
};
axios.post(`${api_url}users/conversation/new`, data).then(
	res => console.log(res.data),
	err => console.error(err.data)
);

axios.post(`${api_url}users/conversation/add?id=ljdQQdnb`, {"from": shu_id, "value": "Hey Everyone"}).then(
	res => console.log(res.data),
	err => console.error(err.data)
);

axios.get(`${api_url}users/conversations?id=${shu_id}`).then(res => console.log(res.data));


axios.get(`${api_url}music`).then (
		res => console.log(res.data),
		err => console.error(err.data)
)