let mouthAreaSelector = document.querySelectorAll("[id^='mouth-']");

function mouth1() {
	classRemoverFunc(mouthAreaSelector);
	for (let i = 0; i < 6; i++) {
		areaFiller(mouthAreaSelector, i, 'border');
	}
}

function mouth2() {
	classRemoverFunc(mouthAreaSelector);
	for (let i = 0; i < 2; i++) {
		areaFiller(mouthAreaSelector, i, 'skin');
	}
	for (let i = 2; i < 6; i++) {
		areaFiller(mouthAreaSelector, i, 'border');
	}
}

const mouthOption = document.getElementById('formMouth');
mouthOption.addEventListener('change', patternPickerFunc);
