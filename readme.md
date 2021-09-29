# Api

This is an api made in express using mongodb and mongoose.

This api is a part of a beyblade app that I am building.

The app's files are in the project structr (one level up).

The api excepts json as an input for the body.

Enjoy the api each endpoint is listed below along with what you need to pass it as data !!!

## Install

    npm install;

    Creat a env with these props : 
    DATABASE_URL, PORT, HOST, API_URL - (http://HOST:PORT/)

## Running and Testing and development env

    run ~ npm start
    development ~ npm dev-start
    test ~ npm test

## REST API

### Adding an endpoint

#### Create a new js file and start with this stater code :

```javascript
const express = require('express');

const router = express.Router()

module.exports = router

// Where get is you can add the name of your http function
router.get('/url', (req, res) => {
	// Complecated operation
	
	// Getting body elements
	const name = req.body.name;
	
	// Getting query elements
	const last_name = req.query.last_name;
	
	// return status - statuscode json-response
	return res.status(200).json({})
})
```

### Make sure to add in server.js by :

```javascript
const myrouter = require('path to your router')
app.use('/your url', myrouter)
```

### My Endpoints

#### BEYBLADES

    Beyblades
    TYPE: GET
    ROUTE: /beyblades/

#### BATTLE

    Battle
    TYPE: get
    QUERY PARAMS: [bey_1_id, bey_2_id]
    ROUTE: /battle/

### SEARCH

    SEARCH
    TYPE: GET
    QUERY PARAMS: [what_to_search]
    ROUTE: /search/

### NAMES

    Names
    TYPE: GET
    ROUTE: /names/

### USERS

#### ADD
    Add User    
    TYPE: POST
    ROUTE: /users/
    BODY: 

```json5
{
	"nickname": "nickname",
	"password": "password",
	"gender": "male or female",
	"color": "color",
	"mail": "mail",
	"phone": 0000000000,
	"contacts": [],
}
```

#### AUTH
    Authentication
    TYPE: POST
    ROUTE: /users/auth/
    BODY

```json5
{
      "user": "name_entered_when_logging_in",
      "password": "password_entered_when_logging_in"
}
```

#### CONTACTS
    Contacts of user
    TYPE: GET
    QUERY PARAMS: [id]
    ROUTE: /users/contacts/

#### ADD
    Add A Contact
    TYPE: GET
    QUERY PARAMS: [new_contact_id, user_id]
    ROUTE: /users/contacts/add/

#### CONVERSATIONS
    Get All Conversations Of A User
    TYPE: GET
    QUERY PARAMS: [id]
    ROUTE: /users/conversations/

#### NEW
    Making A New Conversation
    TYPE: POST
    ROUTE: /conversation/new/
    BODY: 
```json5
{
      "users": []
}
```

#### ADD
    Adding A Conversation
    TYPE: POST
    ROUTE: /conversation/add
    QUERY PARAMS: [id]
    BODY: 
```json5
{
      "from": "",
      "value": ""
}
```

### Music
#### Get
    Getting the songs
    TYPE: GET
    ROUTE: /music/
    
#### Add
    Adding a song
    TYPE: Post
    ROUTE: /music/
    BODY: 
```json5
{
  _id: "",
  name: ""
}
```

![](./beyblade-website/src/Assets/Logo.png?raw=true)"# Beyblade" 
