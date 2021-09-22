function find(bey) {
	let names = []
	for (const beyElement of bey) names.push(beyElement["name"])
	return names
}

module.exports = find;