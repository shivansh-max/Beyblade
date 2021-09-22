// Imports
const express = require('express');
const User = require('./../../models/user');
const Conversation = require('./../../models/conversation');
const escapeRegex = require('./../../escapeRegex');
const convert = require('./../Convert');
const randomString = require('random-string');

// Creating router
const router = express.Router();

// Add a user
router.post('/', async (req, res) => {
	// Creating
	const body = req.body;
	
	// Creating a user
	const user = new User({
		_id: body._id,
		nickname: body.nickname,
		password: body.password,
		gender: body.gender,
		color: body.color,
		mail: body.mail,
		phone: body.phone,
		contacts: body.contacts
	});
	
	try {
		await user.save();
		// Saving the user to the database and then returning a success message
		res.status(201).json({msg: "added user"});
	} catch (e) {
		// Returrning the error
		res.status(400).json({message: e.message});
	}
});

// Login
router.post('/auth', async (req, res) => {
	// Getting password from body
	const [user, password] = [
		new RegExp(escapeRegex(req.body.user), 'gi'),
		new RegExp(escapeRegex(req.body.password), 'gi')
	];
	
	// Finding the user to check if they passed the correct values
	let valid_user = await User.find({nickname: user, password: password});
	// Creating a status and response
	let [status_code, response] = [202, {"status": true, "user": valid_user}];
	
	// Checking if we found the user
	if (valid_user.length === 0) {
		status_code = 404;
		response = {"status": false, "reason": "not found"};
	}
	
	res.status(status_code).json(response);
});

// Getting contacts
router.get('/contacts', async (req, res) => {
	// Getting id and creating a response element then finding user
	const id = req.query.id;
	let response= {};
	let user = await User.findById(id);
	
	// Checking to make sure we have a user
	if (user.length === null) return res.status(401).json(response);
	else {
		// Looping through contacts and adding it to the response
		for (const contact of user.contacts) {
			const freind = await User.findById(contact);
			response[contact] = {
				"nickname": freind.nickname,
				"gender": freind.gender,
				"color": freind.color,
				"mail": freind.mail,
				"phone": freind.phone,
			};
		}
	}
	// Returning response
	res.status(200).json(response);
});

// Adding a contact
router.get('/contacts/add', async (req, res) => {
	// Grabing new id userid and then creating a user
	const [new_contact_id, user_id] = [req.query.new_contact_id, req.query.user_id];
	const user = await User.findById(user_id);
	
	// Checking if the user exists
	if (new_contact_id !== "" || new_contact_id !== null) user.contacts = [...user.contacts, new_contact_id];
	
	try {
		// Saving the user and then sending succsess message
		await user.save();
		res.status(200).json(convert(await User.find()));
	} catch (e) {
		// Sending error message
		res.status(500).json({"message": e.message});
	}
	
});

//  Getting the user
router.get('/conversations', async (req, res) => {
	// First I am getting the id then returning any conv. that has the id in its users
	const id = req.query.id;
	res.status(200).json(convert(await Conversation.find({users: id})));
});

// Making a new conversation
router.post('/conversation/new', async (req, res) => {
	// Getting the users checking if the esist if not returning error
	const users = req.body.users;
	if (!users) return res.status(100).json({"message": "Sorry but you didn't send any users"});
	
	// Creating a conv with dummy text
	const new_conversation = new Conversation({
		_id: randomString(8),
		users: users,
		messages: [{
			"from": "BOT",
			"value": "Hello everybody welcome to you new conversation !!!\nI hope you have fun  🎉"
		}]
	});
	
	// Checking if we can save the conv if not sending error if so sneding happy message
	try {
		res.status(201).json(await new_conversation.save());
	} catch (err) {
		res.status(501).json({"error": err.message});
	}
});

// Adding a message
router.post('/conversation/add', async (req, res) => {
	// Creating a message var and then getting the id
	let msg;
	const id = req.query.id;
	
	// Checking if the required data exists if not returning an error
	if (req.body.from, req.body.value) {
		// Making the message
		msg = {
			"from": req.body.from,
			"value": req.body.value
		};
	} else return res.status(400).json({"messge": "Values are missing"});
	
	// Checking if id exists
	if (!id) {
		return res.status(400).json({"message": "Id is missing"});
	}
	
	// Creating a conv and adding the message to id
	const conversation = await Conversation.findById(id);
	conversation.messages = [...conversation.messages, msg];
	
	// Trying to : (save and return good result) If there is and error : (Sending error)
	try {
		await conversation.save();
		res.status(200).json(conversation);
	} catch (e) {
		res.status(500).json({"message": e.message});
	}
});

// Exports
module.exports = router;
