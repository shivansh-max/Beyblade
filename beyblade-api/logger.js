function logger(value, status = true) {
	if (status) console.log(value)
	else console.error(value)
}

module.exports = logger;