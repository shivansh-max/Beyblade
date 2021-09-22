import Cho_z_Achilles from '../Assets/Beyblades/Cho-Z_Achilles.png'
import Cho_z_Spriggan from '../Assets/Beyblades/Cho-Z_Spriggan.png'
import Cho_z_Valtreyak from '../Assets/Beyblades/Cho-Z_Valtreyak.png'
import Left_Eclipse from '../Assets/Beyblades/Left_Eclipse.png'
import Prime_Apocalypse from '../Assets/Beyblades/Prime_Apocalypse.png'

const BeybladeList = [Cho_z_Achilles, Cho_z_Valtreyak, Cho_z_Spriggan, Left_Eclipse, Prime_Apocalypse];

function getRandomBey() {
	return BeybladeList[Math.floor(Math.random() * BeybladeList.length)]
}

export {BeybladeList, getRandomBey}