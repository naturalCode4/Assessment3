


//NOTE: currently need to comment out home.js for this to work. not sure why

const randomRestaurant = event => {

	restaurantSection.removeChild(restaurantSection.childNodes[2])

	const frasierRestaurants = ['Busuba Thai', 'The Boco Restaurant', 'McDevitt Taco Supply', 'Kathmandu Restaurant II', 'Tsing Tao', "Illegal Pete's"]
	let random = Math.floor(Math.random() * frasierRestaurants.length)
	const restaurantName = frasierRestaurants[random]
	console.log(restaurantName)

	const generatedRestaurant = document.createElement('p')
	generatedRestaurant.textContent=restaurantName
	restaurantSection.appendChild(generatedRestaurant)

	// event.target.parentNode.append(generatedRestaurant)

}

let restaurantSection = document.querySelector('#random-section')

let restaurantButton = document.querySelector('#random-restaurant-button')
restaurantButton.addEventListener('click', randomRestaurant)

