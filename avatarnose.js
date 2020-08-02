let noseAreaSelector = document.querySelectorAll("[id^='nose-']");

function nose1() {
	classRemoverFunc(noseAreaSelector);
	noseAreaSelector[0].className += 'skin';
	noseAreaSelector[1].className += 'skin';
	noseAreaSelector[2].className += 'skin';
	noseAreaSelector[3].className += 'skin';
	noseAreaSelector[4].className += 'skin';
	noseAreaSelector[5].className += 'border';
	noseAreaSelector[6].className += 'skin';
	noseAreaSelector[7].className += 'skin';
	noseAreaSelector[8].className += 'skin';
	noseAreaSelector[9].className += 'border';
	noseAreaSelector[10].className += 'border';
	noseAreaSelector[11].className += 'skin';
}

function nose2() {
	classRemoverFunc(noseAreaSelector);
	noseAreaSelector[0].className += 'skin';
	noseAreaSelector[1].className += 'skin';
	noseAreaSelector[2].className += 'skin';
	noseAreaSelector[3].className += 'skin';
	noseAreaSelector[4].className += 'skin';
	noseAreaSelector[5].className += 'skin';
	noseAreaSelector[6].className += 'border';
	noseAreaSelector[7].className += 'skin';
	noseAreaSelector[8].className += 'skin';
	noseAreaSelector[9].className += 'border';
	noseAreaSelector[10].className += 'border';
	noseAreaSelector[11].className += 'skin';
}

function nose3() {
	classRemoverFunc(noseAreaSelector);
	noseAreaSelector[0].className += 'skin';
	noseAreaSelector[1].className += 'skin';
	noseAreaSelector[2].className += 'skin';
	noseAreaSelector[3].className += 'skin';
	noseAreaSelector[4].className += 'skin';
	noseAreaSelector[5].className += 'skin';
	noseAreaSelector[6].className += 'skin';
	noseAreaSelector[7].className += 'skin';
	noseAreaSelector[8].className += 'skin';
	noseAreaSelector[9].className += 'border';
	noseAreaSelector[10].className += 'border';
	noseAreaSelector[11].className += 'skin';
}

function nose4() {
	classRemoverFunc(noseAreaSelector);
	noseAreaSelector[0].className += 'skin';
	noseAreaSelector[1].className += 'skin';
	noseAreaSelector[2].className += 'skin';
	noseAreaSelector[3].className += 'skin';
	noseAreaSelector[4].className += 'skin';
	noseAreaSelector[5].className += 'border';
	noseAreaSelector[6].className += 'skin';
	noseAreaSelector[7].className += 'border';
	noseAreaSelector[8].className += 'skin';
	noseAreaSelector[9].className += 'border';
	noseAreaSelector[10].className += 'border';
	noseAreaSelector[11].className += 'skin';
}

function nose5() {
	classRemoverFunc(noseAreaSelector);
	noseAreaSelector[0].className += 'skin';
	noseAreaSelector[1].className += 'skin';
	noseAreaSelector[2].className += 'skin';
	noseAreaSelector[3].className += 'skin';
	noseAreaSelector[4].className += 'border';
	noseAreaSelector[5].className += 'skin';
	noseAreaSelector[6].className += 'skin';
	noseAreaSelector[7].className += 'border';
	noseAreaSelector[8].className += 'border';
	noseAreaSelector[9].className += 'border';
	noseAreaSelector[10].className += 'border';
	noseAreaSelector[11].className += 'border';
}

const noseOption = document.getElementById('formNose');
noseOption.addEventListener('change', patternPickerFunc);
