let eyeAreaSelector = document.querySelectorAll("[id^='eye-']");

let eyeFunctions = {
	eyeTypeI: () => {
		classRemoverFunc(eyeAreaSelector);
		eyeAreaSelector[0].className += 'border';
		eyeAreaSelector[1].className += 'border';
		eyeAreaSelector[2].className += 'border';
		eyeAreaSelector[3].className += 'border';
		eyeAreaSelector[4].className += 'border';
		eyeAreaSelector[5].className += 'border';
		eyeAreaSelector[6].className += 'skin';
		eyeAreaSelector[7].className += 'border';
		eyeAreaSelector[8].className += 'skin';
		eyeAreaSelector[9].className += 'skin';
		eyeAreaSelector[10].className += 'border';
		eyeAreaSelector[11].className += 'skin';
	},
	eyeTypeII: () => {
		classRemoverFunc(eyeAreaSelector);
		eyeAreaSelector[0].className += 'border';
		eyeAreaSelector[1].className += 'border';
		eyeAreaSelector[2].className += 'border';
		eyeAreaSelector[3].className += 'border';
		eyeAreaSelector[4].className += 'border';
		eyeAreaSelector[5].className += 'border';
		eyeAreaSelector[6].className += 'eyeball';
		eyeAreaSelector[7].className += 'border';
		eyeAreaSelector[8].className += 'eyeball';
		eyeAreaSelector[9].className += 'eyeball';
		eyeAreaSelector[10].className += 'border';
		eyeAreaSelector[11].className += 'eyeball';
	},
	
	eyeTypeIII: () => {
    classRemoverFunc(eyeAreaSelector);
    eyeAreaSelector[0].className += 'eyeball';
    eyeAreaSelector[1].className += 'border';
    eyeAreaSelector[2].className += 'eyeball';
    eyeAreaSelector[3].className += 'eyeball';
    eyeAreaSelector[4].className += 'border';
    eyeAreaSelector[5].className += 'eyeball';
    eyeAreaSelector[6].className += 'eyeball';
    eyeAreaSelector[7].className += 'border';
    eyeAreaSelector[8].className += 'eyeball';
    eyeAreaSelector[9].className += 'eyeball';
    eyeAreaSelector[10].className += 'border';
    eyeAreaSelector[11].className += 'eyeball';
  }
};

let eyeTypeIBtn = document.getElementById('eyeI');
eyeTypeIBtn.addEventListener('click', eyeFunctions.eyeTypeI);

let eyeTypeIIBtn = document.getElementById('eyeII');
eyeTypeIIBtn.addEventListener('click', eyeFunctions.eyeTypeII);

let eyeTypeIIIBtn = document.getElementById('eyeIII');
eyeTypeIIIBtn.addEventListener('click', eyeFunctions.eyeTypeIII);
