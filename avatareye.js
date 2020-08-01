let eyeAreaSelector = document.querySelectorAll("[id^='eye-']");

let eyeFunctions = {
	eyeTypeI: () => {
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
	},
	eyeTypeII: () => {
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
	},

	eyeTypeIII: () => {
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
};

let eyeTypeIBtn = document.getElementById('eyeI');
eyeTypeIBtn.addEventListener('click', eyeFunctions.eyeTypeI);

let eyeTypeIIBtn = document.getElementById('eyeII');
eyeTypeIIBtn.addEventListener('click', eyeFunctions.eyeTypeII);

let eyeTypeIIIBtn = document.getElementById('eyeIII');
eyeTypeIIIBtn.addEventListener('click', eyeFunctions.eyeTypeIII);
