// THIS AREA WILL BE COMPLETELY MODIFIED, PLEASE DO NOT MAKE CHANGES ON IT YET

//Make different functions for short and long hair to make the short hair patterns faster

let hairAreaSelector = document.querySelectorAll("[id^='hair-']");
let bangAreaSelector = document.querySelectorAll("[id^='bang-']");

let areaFiller = (fillArea, idNumber, cssClassName) => {
	fillArea[idNumber].className += cssClassName;
};

const hairFunctions = {
	hairTypeI: () => {
		classRemoverFunc(hairAreaSelector);
	},
	hairTypeII: () => {
		//later on this will be summarized in fewer for loops. Now it has a lot for a better guidance at the time of making patterns
		// 	classRemoverFunc(hairAreaSelector);
		// 	for (let i = 0; i < 196; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 196; i < 206; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 206; i < 214; i++) {
		// 		areaFiller(hairAreaSelector, i, 'border');
		// 	}
		// 	for (let i = 214; i < 224; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 224; i < 233; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 233, 'border');
		// 	for (let i = 234; i < 242; i++) {
		// 		areaFiller(hairAreaSelector, i, 'skin');
		// 	}
		// 	areaFiller(hairAreaSelector, 242, 'border');
		// 	for (let i = 243; i < 252; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 252; i < 260; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 260, 'border');
		// 	for (let i = 261; i < 271; i++) {
		// 		areaFiller(hairAreaSelector, i, 'skin');
		// 	}
		// 	areaFiller(hairAreaSelector, 271, 'border');
		// 	for (let i = 272; i < 280; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 280; i < 287; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 287, 'border');
		// 	for (let i = 288; i < 300; i++) {
		// 		areaFiller(hairAreaSelector, i, 'skin');
		// 	}
		// 	areaFiller(hairAreaSelector, 300, 'border');
		// 	for (let i = 301; i < 308; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 308; i < 315; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 315, 'border');
		// 	for (let i = 316; i < 328; i++) {
		// 		areaFiller(hairAreaSelector, i, 'skin');
		// 	}
		// 	areaFiller(hairAreaSelector, 328, 'border');
		// 	for (let i = 329; i < 336; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 336; i < 343; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 343, 'border');
		// 	for (let i = 344; i < 356; i++) {
		// 		areaFiller(hairAreaSelector, i, 'skin');
		// 	}
		// 	areaFiller(hairAreaSelector, 356, 'border');
		// 	for (let i = 357; i < 364; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 364; i < 371; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 371, 'border');
		// 	for (let i = 372; i < 384; i++) {
		// 		areaFiller(hairAreaSelector, i, 'skin');
		// 	}
		// 	areaFiller(hairAreaSelector, 384, 'border');
		// 	for (let i = 385; i < 392; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 392; i < 399; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 399, 'border');
		// 	areaFiller(hairAreaSelector, 400, 'border');
		// 	for (let i = 401; i < 408; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 408; i < 578; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	//Lower part of body
		// 	for (let i = 578; i < 583; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	for (let i = 583; i < 595; i++) {
		// 		areaFiller(hairAreaSelector, i, 'border');
		// 	}
		// 	for (let i = 595; i < 605; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 605, 'border');
		// 	areaFiller(hairAreaSelector, 606, 'shirt');
		// 	for (let i = 607; i < 616; i++) {
		// 		areaFiller(hairAreaSelector, i, 'shirt');
		// 	}
		// 	areaFiller(hairAreaSelector, 616, 'border');
		// 	for (let i = 617; i < 626; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 626, 'border');
		// 	for (let i = 627; i < 639; i++) {
		// 		areaFiller(hairAreaSelector, i, 'shirt');
		// 	}
		// 	areaFiller(hairAreaSelector, 639, 'border');
		// 	for (let i = 640; i < 648; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 648, 'border');
		// 	for (let i = 649; i < 661; i++) {
		// 		areaFiller(hairAreaSelector, i, 'shirt');
		// 	}
		// 	areaFiller(hairAreaSelector, 661, 'border');
		// 	for (let i = 662; i < 670; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
		// 	areaFiller(hairAreaSelector, 670, 'border');
		// 	for (let i = 671; i < 673; i++) {
		// 		areaFiller(hairAreaSelector, i, 'shirt');
		// 	}
		// 	areaFiller(hairAreaSelector, 673, 'border');
		// 	for (let i = 674; i < 680; i++) {
		// 		areaFiller(hairAreaSelector, i, 'shirt');
		// 	}
		// 	areaFiller(hairAreaSelector, 680, 'border');
		// 	for (let i = 681; i < 683; i++) {
		// 		areaFiller(hairAreaSelector, i, 'shirt');
		// 	}
		// 	areaFiller(hairAreaSelector, 683, 'border');
		// 	for (let i = 684; i < 688; i++) {
		// 		areaFiller(hairAreaSelector, i, 'bg');
		// 	}
	}
};

//Bang test area

function testFunc() {
	classRemoverFunc(bangAreaSelector);
}

let surrounderSelector = [
	document.getElementById('hair-234'),
	document.getElementById('hair-235'),
	document.getElementById('hair-236'),
	document.getElementById('hair-237'),
	document.getElementById('hair-238'),
	document.getElementById('hair-239'),
	document.getElementById('hair-240'),
	document.getElementById('hair-241'),
	document.getElementById('hair-261'),
	document.getElementById('hair-270'),
	document.getElementById('hair-288'),
	document.getElementById('hair-299'),
	document.getElementById('hair-315'),
	document.getElementById('hair-328'),
	document.getElementById('hair-343'),
	document.getElementById('hair-356'),
	document.getElementById('hair-371'),
	document.getElementById('hair-384'),
	document.getElementById('hair-399'),
	document.getElementById('hair-400')
];

function noBangsFunc() {
	classRemoverFunc(bangAreaSelector);
	for (let i = 0; i < bangAreaSelector.length; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	classRemoverFunc(surrounderSelector);
	for (let i = 0; i < surrounderSelector.length; i++) {
		areaFiller(surrounderSelector, i, 'border');
	}

	//Border section
}

function longBangsFunc() {
	//In the future make this into a function to not repeat it so often
	classRemoverFunc(surrounderSelector);
	for (let i = 0; i < surrounderSelector.length - 4; i++) {
		areaFiller(surrounderSelector, i, 'hair');
	}
	//Exceptions
	//Make this into a function in the future
	let exception = surrounderSelector.slice(-4);
	classRemoverFunc(exception);

	for (let i = 0; i < exception.length; i++) {
		areaFiller(exception, i, 'border');
	}

	classRemoverFunc(bangAreaSelector);
	for (let i = 0; i < 42; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	for (let i = 42; i < 55; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
}

function mediumBangsFunc() {
	classRemoverFunc(surrounderSelector);

	for (let i = 0; i < surrounderSelector.length; i++) {
		areaFiller(surrounderSelector, i, 'hair');
	}

	//Exceptions
	let exception = surrounderSelector.slice(-6);
	classRemoverFunc(exception);
	for (let i = 0; i < exception.length; i++) {
		areaFiller(exception, i, 'border');
	}

	classRemoverFunc(bangAreaSelector);
	for (let i = 0; i < 30; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}

	for (let i = 30; i < 42; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}

	for (let i = 42; i < 54; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
}

function shortBangsFunc() {
	classRemoverFunc(surrounderSelector);
	for (let i = 0; i < surrounderSelector.length; i++) {
		areaFiller(surrounderSelector, i, 'hair');
	}

	//Exceptions
	let exception = surrounderSelector.slice(-8);
	classRemoverFunc(exception);
	for (let i = 0; i < exception.length; i++) {
		areaFiller(exception, i, 'border');
	}
	classRemoverFunc(bangAreaSelector);
	for (let i = 0; i < 18; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	for (let i = 18; i < 30; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 30; i < 54; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
}

const testBtn = document.getElementById('test');
testBtn.addEventListener('click', testFunc);

const noBangBtn = document.getElementById('no-bangs');
noBangBtn.addEventListener('click', noBangsFunc);

const longBangsBtn = document.getElementById('long-bangs');
longBangsBtn.addEventListener('click', longBangsFunc);

const mediumBangsBtn = document.getElementById('medium-bangs');
mediumBangsBtn.addEventListener('click', mediumBangsFunc);

const shortBangsBtn = document.getElementById('short-bangs');
shortBangsBtn.addEventListener('click', shortBangsFunc);

//-------------------------------------------------

// Make a special bald function

const hairTypeIBtn = document.getElementById('hairI');
hairTypeIBtn.addEventListener('click', hairFunctions.hairTypeI);

const hairTypeIIBtn = document.getElementById('hairII');
hairTypeIIBtn.addEventListener('click', hairFunctions.hairTypeII);

// Hair Color Section
const hairButton = document.getElementById('hair-color');
hairButton.addEventListener('input', colorFunc);
