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