const classesToRemove = new RegExp(/skin|bg|border|hair|shirt|eyeball/, 'gi');
let classEraser = (element) => {
	if (element.className.match(classesToRemove)) {
		element.className = element.className.replace(classesToRemove, '');
	}
};

let classRemoverFunc = (areaSelector) => {
	for (let i = 0; i < areaSelector.length; i++) {
		classEraser(areaSelector[i]);
	}
};

//Color picker formula
function colorFunc() {
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

///Experimental Section:
//When an user clicks on a button, that button becomes disabled
// let pageBtns = document.querySelectorAll('button');
// function buttonToggler() {
// 	for (let i = 0; i < pageBtns.length; i++) {
// 		pageBtns[i].disabled = false;
// 	}
// 	this.disabled = true;
// }
// pageBtns.forEach((x) => x.addEventListener('click', buttonToggler));
