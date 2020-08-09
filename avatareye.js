let eyeAreaSelector = document.querySelectorAll("[id^='eye-']");

function eye1() {
	classRemoverFunc(eyeAreaSelector);
	for (let i = 0; i < 6; i++) {
		areaFiller(eyeAreaSelector, i, 'border');
	}
	areaFiller(eyeAreaSelector, 6, 'skin');
	areaFiller(eyeAreaSelector, 7, 'border');
	for (let i = 8; i < 10; i++) {
		areaFiller(eyeAreaSelector, i, 'skin');
	}
	areaFiller(eyeAreaSelector, 10, 'border');
	areaFiller(eyeAreaSelector, 11, 'skin');
}

function eye2() {
	classRemoverFunc(eyeAreaSelector);
	for (let i = 0; i < 6; i++) {
		areaFiller(eyeAreaSelector, i, 'border');
	}
	areaFiller(eyeAreaSelector, 6, 'eyeball');
	areaFiller(eyeAreaSelector, 7, 'border');
	for (let i = 8; i < 10; i++) {
		areaFiller(eyeAreaSelector, i, 'eyeball');
	}
	areaFiller(eyeAreaSelector, 10, 'border');
	areaFiller(eyeAreaSelector, 11, 'eyeball');
}

function eye3() {
	classRemoverFunc(eyeAreaSelector);
	areaFiller(eyeAreaSelector, 0, 'eyeball');
	areaFiller(eyeAreaSelector, 1, 'border');
	for (let i = 2; i < 4; i++) {
		areaFiller(eyeAreaSelector, i, 'eyeball');
	}
	areaFiller(eyeAreaSelector, 4, 'border');
	for (let i = 5; i < 7; i++) {
		areaFiller(eyeAreaSelector, i, 'eyeball');
	}
	areaFiller(eyeAreaSelector, 7, 'border');
	for (let i = 8; i < 10; i++) {
		areaFiller(eyeAreaSelector, i, 'eyeball');
	}
	areaFiller(eyeAreaSelector, 10, 'border');
	areaFiller(eyeAreaSelector, 11, 'eyeball');
}

const eyeOption = document.getElementById('formEye');
eyeOption.addEventListener('change', patternPickerFunc);
