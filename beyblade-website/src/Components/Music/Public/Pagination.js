function next(current, setC, limit) {
	if (current + 1 === limit) setC(0);
	else setC(current + 1)
}

function prev(current, setC, limit) {
	if (current === 0) setC(limit - 1)
	else setC(current - 1)
}

export {next, prev}