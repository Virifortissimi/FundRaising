let button3 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-3 > div');
let button4 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-4 > div');
let button5 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-5 > div');
let button6 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-6 > div');

let text3 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-3 > footer');
let text4 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-4 > footer');
let text5 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-5 > footer');
let text6 = document.querySelector('body > div > div > div.col-lg-3.col-md-6.col-sm-12.option-6 > footer');

text3.style.display = "none";
text4.style.display = "none";
text5.style.display = "none";
text6.style.display = "none";


button3.addEventListener('click', function() {
    // console.log('Hello');
    let innerbutton3 = button3.querySelector('div');
    innerbutton3.classList.toggle('checked');
	button3.classList.toggle('checkbox-option2');
	if (text3.style.display === "none") {
		text3.style.display = "block";
	}else {
		text3.style.display = "none";
	}
})
button4.addEventListener('click', function() {
    // console.log('Hello');
    let innerbutton4 = button4.querySelector('div');
    innerbutton4.classList.toggle('checked');
	button4.classList.toggle('checkbox-option2');
	if (text4.style.display === "none") {
		text4.style.display = "block";
	}else {
		text4.style.display = "none";
	}
})
button5.addEventListener('click', function() {
    // console.log('Hello');
    let innerbutton5 = button5.querySelector('div');
    innerbutton5.classList.toggle('checked');
	button5.classList.toggle('checkbox-option2');
	if (text5.style.display === "none") {
		text5.style.display = "block";
	}else {
		text5.style.display = "none";
	}
})
button6.addEventListener('click', function() {
    // console.log('Hello');
    let innerbutton6 = button6.querySelector('div');
    innerbutton6.classList.toggle('checked');
	button6.classList.toggle('checkbox-option2');
	if (text6.style.display === "none") {
		text6.style.display = "block";
	}else {
		text6.style.display = "none";
	}
})
