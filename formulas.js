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

//Universal Pattern picker
function patternPickerFunc() {
	let funcName = this.value;
	let func = window[funcName];
	if (typeof func === 'function') {
		func();
	}
}
