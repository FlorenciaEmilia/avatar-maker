let mouthAreaSelector = document.querySelectorAll("[id^='mouth-']");

function mouth1() {
	classRemoverFunc(mouthAreaSelector);
	mouthAreaSelector[0].className += 'border';
	mouthAreaSelector[1].className += 'border';
	mouthAreaSelector[2].className += 'border';
	mouthAreaSelector[3].className += 'border';
	mouthAreaSelector[4].className += 'border';
	mouthAreaSelector[5].className += 'border';
}

function mouth2() {
	classRemoverFunc(mouthAreaSelector);
	mouthAreaSelector[0].className += 'skin';
	mouthAreaSelector[1].className += 'skin';
	mouthAreaSelector[2].className += 'border';
	mouthAreaSelector[3].className += 'border';
	mouthAreaSelector[4].className += 'border';
	mouthAreaSelector[5].className += 'border';
}

const mouthOption = document.getElementById('formMouth');
mouthOption.addEventListener('change', patternPickerFunc);
