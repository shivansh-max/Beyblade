function Convert(list) {
    // Creating res
    let res = {};
    // Looping throughout the beyblades and appending it to the result
    for (const beyblade of list) res[beyblade._id] = beyblade;

    // Returning
    return res;
}

module.exports = Convert;