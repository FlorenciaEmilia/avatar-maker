// THIS AREA WILL BE COMPLETELY MODIFIED, PLEASE DO NOT MAKE CHANGES ON IT YET

//Make different functions for short and long hair to make the short hair patterns faster

let hairAreaSelector = document.querySelectorAll("[id^='hair-']");

let areaFiller = (fillArea, idNumber, cssClassName) => {
	fillArea[idNumber].className += cssClassName;
};

const hairFunctions = {
	hairTypeI: () => {
		classRemoverFunc(hairAreaSelector);
	},
	hairTypeII: () => {
		//later on this will be summarized in fewer for loops. Now it has a lot for a better guidance at the time of making patterns
		//This has the big problem that always draws the same pattern in the lower part. This has to be modified
		classRemoverFunc(hairAreaSelector);

		for (let i = 0; i < 224; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 224; i < 234; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 234; i < 242; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}

		for (let i = 242; i < 252; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 252; i < 261; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 261; i < 262; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}

		for (let i = 262; i < 270; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}
		for (let i = 270; i < 271; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 271; i < 280; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 280; i < 287; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 287; i < 289; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 289; i < 299; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}
		for (let i = 299; i < 301; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 301; i < 308; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 308; i < 315; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 315, 'border');

		for (let i = 316; i < 328; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}
		areaFiller(hairAreaSelector, 328, 'border');

		for (let i = 329; i < 336; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 336; i < 343; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 343, 'border');

		for (let i = 344; i < 356; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 356, 'border');

		for (let i = 357; i < 364; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 364; i < 371; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 371, 'border');

		for (let i = 372; i < 384; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 384, 'border');

		for (let i = 385; i < 392; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 392; i < 399; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 399, 'border');

		areaFiller(hairAreaSelector, 400, 'border');

		for (let i = 401; i < 408; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		for (let i = 408; i < 578; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		//Lower part of body
		for (let i = 578; i < 583; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 583; i < 595; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 595; i < 605; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 605, 'border');
		areaFiller(hairAreaSelector, 606, 'skin');
		areaFiller(hairAreaSelector, 607, 'border');

		for (let i = 608; i < 614; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}
		areaFiller(hairAreaSelector, 614, 'border');
		areaFiller(hairAreaSelector, 615, 'skin');
		areaFiller(hairAreaSelector, 616, 'border');

		for (let i = 617; i < 626; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 626, 'border');

		for (let i = 627; i < 629; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}
		areaFiller(hairAreaSelector, 629, 'border');

		for (let i = 630; i < 636; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}
		areaFiller(hairAreaSelector, 636, 'border');

		for (let i = 637; i < 639; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 639, 'border');

		for (let i = 640; i < 648; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 648, 'border');

		for (let i = 649; i < 651; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 651, 'border');

		for (let i = 652; i < 658; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 658, 'border');

		for (let i = 659; i < 661; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 661, 'border');

		for (let i = 662; i < 670; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 670, 'border');

		for (let i = 671; i < 673; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 673, 'border');

		for (let i = 674; i < 680; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 680, 'border');

		for (let i = 681; i < 683; i++) {
			areaFiller(hairAreaSelector, i, 'skin');
		}

		areaFiller(hairAreaSelector, 683, 'border');

		for (let i = 684; i < 688; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
	}
};

const hairTypeIBtn = document.getElementById('hairI');
hairTypeIBtn.addEventListener('click', hairFunctions.hairTypeI);

const hairTypeIIBtn = document.getElementById('hairII');
hairTypeIIBtn.addEventListener('click', hairFunctions.hairTypeII);
