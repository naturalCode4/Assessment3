console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted')
}

const giveCompliment = event => {
	event.preventDefault()

	alert('Hey. Youre doing great. You are loved by the universe. Press OK and keep going <3')
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img#rubberduck')
image.addEventListener('mouseover', giveCompliment)

let restaurantSection = documement.getElementByID("random-section")

const randomRestaurant = event => {
	// event.preventDefault()

	const frasierRestaurants = ['Busuba Thai', 'The Boco Restaurant', 'McDevitt Taco Supply', 'Kathmandu Restaurant II', 'Tsing Tao', "Illegal Pete's"]
	let random = Math.floor(Math.random() * frasierRestaurants.length)
	const restaurantName = frasierRestaurants[random]
	console.log(restaurantName)

	const generatedRestaurant = document.createElement('p')
	restaurantSection.appendChild(generatedRestaurant)
	generatedRestaurant.textContent=restaurantName

}

let restaurantButton = document.getElementByID('random-restaurant-button')
restaurant.addEventListener('click', randomRestaurant)
