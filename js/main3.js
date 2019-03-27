var button1 = document.querySelector('#village_individual');
var button2 = document.querySelector('#village_organization');
var text1 = document.querySelector('#village_footer_individual');
var text2 = document.querySelector('#village_footer_organization');

text1.style.display = "none";
text2.style.display = "none";

button1.addEventListener('click', function() {
	// console.log('Hello');
	var innerbutton1 = button1.querySelector('div');
	
	innerbutton1.classList.toggle('checked');
	button1.classList.toggle('checkbox-option2');
	if (text1.style.display === "none") {
		text1.style.display = "block";
	}else {
		text1.style.display = "none";
	}
})
button2.addEventListener('click', function() {
	// console.log('Hello');
	var innerbutton2 = button2.querySelector('div');

	innerbutton2.classList.toggle('checked');
	button2.classList.toggle('checkbox-option2');
	if (text2.style.display === "none") {
		text2.style.display = "block";
	}else {
		text2.style.display = "none";
	}
})
