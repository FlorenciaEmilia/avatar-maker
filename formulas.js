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
