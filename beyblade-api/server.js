// Imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('./logger');
const morgan = require('morgan');

//Importing my routes
const beybladeRoutes = require('./routes/Beyblades/beyblades');
const battleRouter = require('./routes/Battle/battle');
const searchRouter = require('./routes/Search/search');
const namesRouter = require('./routes/Names/Names');
const userRouter = require('./routes/User/user');
const musicRouter = require('./routes/Music/music')

// Creating the app
const app = express();

// Morgan for logging
app.use(morgan("dev"));

// Db connection
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Db logger
db.on('error', (error) => logger(error, false));
db.once('open', () => logger('Connected to Database !!!'));

// Making our app use json
app.use(express.json());

// Handling cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", `http://${process.env.HOST}:3000`);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

// Using my routes
app.use('/beyblades', beybladeRoutes);
app.use('/battle', battleRouter);
app.use('/search', searchRouter);
app.use('/names', namesRouter);
app.use('/music', musicRouter)
app.use('/users', userRouter);

// Starting the server
app.listen(+process.env.PORT, process.env.HOST, () => logger('Server is listening...'));