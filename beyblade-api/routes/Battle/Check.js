function calculate_amount_od_damage(first, second) {
	return (first.defense + first.stamina + first.agility) - (second.defense + second.stamina + second.agility)
}

function Check(bey1, bey2) {
	// Checking if they are the same
	if (bey1 === bey2) return {"winner": "Tie the match will depend on the player !!!"}

	//	Checking if bey 1 can withstand bey2's attack and then
	//	vice versa if they both can withstand then drawing out battle
	if ((bey1.attack + bey1.weight + bey1.agility) > (bey2.attack + bey2.weight + bey2.agility)) return bey1
	else if ((bey1.attack + bey1.weight + bey1.agility) < (bey2.attack + bey2.weight + bey2.agility)) return bey2
	else {

		// Creating a turn var
		let turn = Math.random()

		// Drawing out the battle in a while loop
		while ((bey1.stamina > 0 && bey1.stamina > 0) && (bey2.stamina > 0 && bey2.stamina > 0)) {

			// Randomly doing turns and checking accordingly
			if (turn > 0.5) {
				// Calculating the amount of damage
				const amount_of_damage = calculate_amount_od_damage(bey2, bey1)

				// If the bey2 bursts then returning bey1 because it won else taking out the damage
				if (bey2.burst - Math.abs(amount_of_damage) < 0) return bey1
				else bey2.burst -= Math.abs(amount_of_damage)

			} else {
				// Calculating the amount of damage
				const amount_of_damage = calculate_amount_od_damage(bey1, bey2)

				// If the bey1 bursts then returning bey2 because it won else taking out the damage
				if (bey1.burst - Math.abs(amount_of_damage) < 0) return bey2
				else bey1.burst -= Math.abs(amount_of_damage)
			}

			// Reassigning the value
			turn = Math.random()
		}
	}
}

module.exports = Check
