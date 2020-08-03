//Make different functions for short and long hair to make the short hair patterns faster

let hairAreaSelector = document.querySelectorAll("[id^='hair-']");
let bangAreaSelector = document.querySelectorAll("[id^='bang-']");
//Testing hair styles
let bangType;
let hairStyle;

let areaFiller = (fillArea, idNumber, cssClassName) => {
	fillArea[idNumber].className += cssClassName;
};

//testing to not have so many repeated code
const hairFunctionsBasePattern = {
	avatarBottom: () => {
		for (let i = 529; i < 541; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 541; i < 551; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 551, 'border');
		for (let i = 552; i < 562; i++) {
			areaFiller(hairAreaSelector, i, 'shirt');
		}
		areaFiller(hairAreaSelector, 562, 'border');
		for (let i = 563; i < 572; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 572, 'border');
		for (let i = 573; i < 585; i++) {
			areaFiller(hairAreaSelector, i, 'shirt');
		}
		areaFiller(hairAreaSelector, 585, 'border');
		for (let i = 586; i < 594; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 594, 'border');
		for (let i = 595; i < 607; i++) {
			areaFiller(hairAreaSelector, i, 'shirt');
		}

		areaFiller(hairAreaSelector, 607, 'border');

		for (let i = 608; i < 616; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 616, 'border');
		for (let i = 617; i < 619; i++) {
			areaFiller(hairAreaSelector, i, 'shirt');
		}
		areaFiller(hairAreaSelector, 619, 'border');
		for (let i = 620; i < 626; i++) {
			areaFiller(hairAreaSelector, i, 'shirt');
		}
		areaFiller(hairAreaSelector, 626, 'border');
		for (let i = 627; i < 629; i++) {
			areaFiller(hairAreaSelector, i, 'shirt');
		}
		areaFiller(hairAreaSelector, 629, 'border');
		for (let i = 630; i < 634; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
	},
	hairTypeXIV: () => {
		let shortCurlyHair = () => {
			for (let i = 0; i < 35; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			for (let i = 35; i < 49; i += 3) {
				areaFiller(hairAreaSelector, i, 'border');
				areaFiller(hairAreaSelector, i + 1, 'border');
			}
			for (let i = 35; i < 49; i += 3) {
				areaFiller(hairAreaSelector, i + 2, 'bg');
			}
			for (let i = 50; i < 61; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			for (let i = 61; i < 63; i++) {
				areaFiller(hairAreaSelector, i, 'border');
			}
			for (let i = 63; i < 78; i += 3) {
				areaFiller(hairAreaSelector, i, 'hair');
				areaFiller(hairAreaSelector, i + 1, 'hair');
			}
			for (let i = 63; i < 78; i += 3) {
				areaFiller(hairAreaSelector, i + 2, 'border');
			}
			areaFiller(hairAreaSelector, 78, 'border');
			for (let i = 79; i < 87; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			for (let i = 87; i < 89; i++) {
				areaFiller(hairAreaSelector, i, 'border');
			}
			for (let i = 89; i < 107; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			for (let i = 107; i < 109; i++) {
				areaFiller(hairAreaSelector, i, 'border');
			}
			for (let i = 109; i < 114; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 114, 'border');
			for (let i = 115; i < 137; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 137, 'border');
			for (let i = 138; i < 142; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 142, 'border');
			for (let i = 143; i < 165; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 165, 'border');
			for (let i = 166; i < 171; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 171, 'border');
			for (let i = 172; i < 192; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 192, 'border');
			for (let i = 193; i < 198; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 198, 'border');
			for (let i = 199; i < 221; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 221, 'border');
			for (let i = 222; i < 226; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 226, 'border');
			for (let i = 227; i < 249; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 249, 'border');
			for (let i = 250; i < 255; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 255, 'border');
			for (let i = 256; i < 268; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 268, 'border');
			for (let i = 269; i < 274; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 274, 'border');
			for (let i = 275; i < 287; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 287, 'border');
			for (let i = 288; i < 292; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 292, 'border');
			for (let i = 293; i < 303; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 303, 'border');
			for (let i = 304; i < 309; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 309, 'border');
			for (let i = 310; i < 318; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 318, 'border');
			for (let i = 319; i < 324; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 324, 'border');
			for (let i = 325; i < 329; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 329, 'border');
			for (let i = 330; i < 335; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 335, 'border');
			for (let i = 336; i < 340; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 340, 'border');
			for (let i = 341; i < 345; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			for (let i = 345; i < 347; i++) {
				areaFiller(hairAreaSelector, i, 'border');
			}
			for (let i = 347; i < 351; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 351, 'border');
			for (let i = 352; i < 357; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 357, 'border');
			for (let i = 358; i < 362; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 362, 'border');
			for (let i = 363; i < 368; i++) {
				areaFiller(hairAreaSelector, i, 'bg');
			}
			areaFiller(hairAreaSelector, 368, 'border');
			for (let i = 369; i < 375; i++) {
				areaFiller(hairAreaSelector, i, 'hair');
			}
			areaFiller(hairAreaSelector, 375, 'border');
		};
		shortCurlyHair();
	},
	hairTypeV: () => {
		hairStyle = 'short-curtly-hair';
		classRemoverFunc(hairAreaSelector);
		for (let i = 0; i < 96; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 96; i < 100; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 100; i < 119; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 119; i < 121; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 121; i < 123; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 123, 'border');

		for (let i = 124; i < 128; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 128, 'border');
		for (let i = 129; i < 131; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 131; i < 133; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 133; i < 146; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 146, 'border');

		for (let i = 147; i < 149; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 149, 'border');
		areaFiller(hairAreaSelector, 150, 'bg');
		areaFiller(hairAreaSelector, 151, 'border');
		for (let i = 152; i < 156; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 156, 'border');
		areaFiller(hairAreaSelector, 157, 'bg');
		areaFiller(hairAreaSelector, 158, 'border');
		for (let i = 159; i < 161; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 161, 'border');
		for (let i = 162; i < 173; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 173, 'border');
		for (let i = 174; i < 177; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 177; i < 180; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 180; i < 184; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 184; i < 187; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 187; i < 190; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 190, 'border');
		for (let i = 191; i < 201; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 201, 'border');
		for (let i = 202; i < 218; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 218, 'border');
		for (let i = 219; i < 230; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		//This is the surrounding area border
		areaFiller(hairAreaSelector, 230, 'border');
		for (let i = 231; i < 245; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 245, 'border');
		for (let i = 246; i < 255; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 255; i < 258; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 258; i < 266; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 266; i < 269; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 269; i < 274; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 274, 'border');
		for (let i = 275; i < 287; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 287, 'border');
		for (let i = 288; i < 292; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 292, 'border');
		for (let i = 293; i < 303; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 303, 'border');
		for (let i = 304; i < 308; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 308, 'border');
		for (let i = 309; i < 319; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 319, 'border');
		for (let i = 320; i < 325; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 325; i < 327; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 327; i < 333; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 333; i < 335; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 335; i < 342; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 342, 'border');
		//Maybe in this row there will be a little bug with the bang combination
		for (let i = 343; i < 345; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 345; i < 347; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 347; i < 349; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 349, 'border');
		for (let i = 350; i < 357; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 357; i < 359; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 359; i < 361; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 361; i < 363; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 363; i < 368; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 368, 'border');
		for (let i = 369; i < 375; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 375, 'border');
		for (let i = 376; i < 380; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 380, 'border');
		for (let i = 381; i < 387; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 387, 'border');
		for (let i = 388; i < 393; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 393, 'border');
		for (let i = 394; i < 398; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 398, 'border');
		for (let i = 399; i < 406; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
	},
	hairTypeVI: () => {
		hairStyle = 'medium-curtly-hair';
		hairFunctionsBasePattern.hairTypeV();
		areaFiller(hairAreaSelector, 406, 'border');
		for (let i = 407; i < 411; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 411, 'border');
		for (let i = 412; i < 419; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 419; i < 421; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 421; i < 425; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 425; i < 427; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 427; i < 432; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 432, 'border');
		for (let i = 433; i < 441; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 441, 'border');
		for (let i = 442; i < 446; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 446, 'border');
		for (let i = 447; i < 457; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 457, 'border');
		for (let i = 458; i < 462; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 462, 'border');
		for (let i = 463; i < 477; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 477, 'border');
		for (let i = 478; i < 483; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 483, 'border');
		for (let i = 484; i < 489; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 489, 'border');
		for (let i = 490; i < 492; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 492, 'border');
		for (let i = 493; i < 498; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 498, 'border');
		for (let i = 499; i < 506; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
	},
	hairTypeVIII: () => {
		hairStyle = 'short-curtly-hair2';
		classRemoverFunc(hairAreaSelector);
		for (let i = 0; i < 90; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 90; i < 93; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 93; i < 96; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 96; i < 100; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 100; i < 103; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 103; i < 106; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 106; i < 117; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 117, 'border');
		for (let i = 118; i < 121; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 121, 'border');
		areaFiller(hairAreaSelector, 122, 'bg');
		areaFiller(hairAreaSelector, 123, 'border');
		for (let i = 124; i < 128; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 128, 'border');
		areaFiller(hairAreaSelector, 129, 'bg');
		areaFiller(hairAreaSelector, 130, 'border');
		for (let i = 131; i < 134; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 134, 'border');
		for (let i = 135; i < 144; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 144, 'border');
		for (let i = 145; i < 150; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 150, 'border');
		for (let i = 151; i < 157; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 157, 'border');
		for (let i = 158; i < 163; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 163, 'border');
		for (let i = 164; i < 172; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 172, 'border');
		for (let i = 173; i < 191; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 191, 'border');
		for (let i = 192; i < 201; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 201, 'border');
		for (let i = 202; i < 218; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 218, 'border');
		for (let i = 219; i < 228; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 228, 'border');
		for (let i = 229; i < 247; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 247, 'border');
		for (let i = 248; i < 255; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 255, 'border');
		for (let i = 256; i < 268; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 268, 'border');
		for (let i = 269; i < 275; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 275, 'border');
		for (let i = 276; i < 286; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 286, 'border');
		for (let i = 287; i < 293; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 293, 'border');
		for (let i = 294; i < 302; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 302, 'border');
		for (let i = 303; i < 309; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 309, 'border');
		for (let i = 310; i < 318; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 318, 'border');
		for (let i = 319; i < 326; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 326, 'border');
		for (let i = 327; i < 333; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 333, 'border');
	},
	hairTypeIX: () => {
		hairFunctionsBasePattern.hairTypeVIII();
		for (let i = 334; i < 341; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 341, 'border');
		for (let i = 342; i < 345; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 345; i < 347; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 347; i < 350; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 350, 'border');
		for (let i = 351; i < 357; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 357, 'border');
		for (let i = 358; i < 362; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 362, 'border');
		for (let i = 363; i < 369; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 369, 'border');
		for (let i = 370; i < 374; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 374, 'border');
		for (let i = 375; i < 381; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 381, 'border');
		for (let i = 382; i < 386; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 386, 'border');
		for (let i = 387; i < 394; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 394, 'border');
		for (let i = 395; i < 397; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 397, 'border');
		for (let i = 398; i < 407; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 407, 'border');
		for (let i = 408; i < 410; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 410, 'border');
		for (let i = 411; i < 420; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 420, 'border');
		for (let i = 421; i < 425; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 425, 'border');
		for (let i = 426; i < 433; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 433, 'border');
		for (let i = 434; i < 440; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 440, 'border');
		for (let i = 441; i < 447; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 447, 'border');
		for (let i = 448; i < 456; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 456, 'border');
		for (let i = 457; i < 463; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 463, 'border');
		for (let i = 464; i < 476; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 476, 'border');
		for (let i = 477; i < 484; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 484, 'border');
		for (let i = 485; i < 497; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 497, 'border');
		for (let i = 498; i < 507; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 507, 'border');
		for (let i = 508; i < 518; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 518, 'border');
	},
	hairTypeXI: () => {
		classRemoverFunc(hairAreaSelector);
		for (let i = 0; i < 38; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 38; i < 46; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 46; i < 62; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 62; i < 66; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 66; i < 74; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 74; i < 78; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 78; i < 89; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 89, 'border');
		for (let i = 90; i < 106; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 106, 'border');
		for (let i = 107; i < 116; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 116, 'border');
		for (let i = 117; i < 135; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 135, 'border');
		for (let i = 136; i < 143; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 143, 'border');
		for (let i = 144; i < 164; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 164, 'border');
		for (let i = 165; i < 170; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 170, 'border');
		for (let i = 171; i < 193; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 193, 'border');
		for (let i = 194; i < 198; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 198, 'border');
		for (let i = 199; i < 221; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 221, 'border');
		for (let i = 222; i < 226; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 226, 'border');
		for (let i = 227; i < 249; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 249, 'border');
		for (let i = 250; i < 254; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 254, 'border');
		for (let i = 255; i < 269; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 269, 'border');
		for (let i = 270; i < 274; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 274, 'border');
		for (let i = 275; i < 287; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 287, 'border');
		for (let i = 288; i < 292; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 292, 'border');
		for (let i = 293; i < 303; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 303, 'border');
		for (let i = 304; i < 308; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 308, 'border');
		for (let i = 309; i < 319; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 319, 'border');
	},
	hairTypeXII: () => {
		hairFunctionsBasePattern.hairTypeXI();
		for (let i = 320; i < 324; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 324, 'border');
		for (let i = 325; i < 329; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 329; i < 331; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 331; i < 335; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 335, 'border');
		for (let i = 336; i < 340; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 340, 'border');
		for (let i = 341; i < 345; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 345; i < 347; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 347; i < 351; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 351, 'border');
		for (let i = 352; i < 356; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 356, 'border');
		for (let i = 357; i < 363; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 363, 'border');
		for (let i = 364; i < 368; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 368, 'border');
		for (let i = 369; i < 375; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 375, 'border');
		for (let i = 376; i < 380; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 380, 'border');
		for (let i = 381; i < 387; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 387, 'border');
		for (let i = 388; i < 392; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 392, 'border');
		for (let i = 393; i < 399; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 399, 'border');
		for (let i = 400; i < 404; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 404, 'border');
		for (let i = 405; i < 413; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 413, 'border');
		for (let i = 414; i < 418; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 418, 'border');
		for (let i = 419; i < 427; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 427, 'border');
		for (let i = 428; i < 432; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 432, 'border');
		for (let i = 433; i < 441; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 441, 'border');
	},
	hairTypeXV: () => {
		classRemoverFunc(hairAreaSelector);
		hairFunctionsBasePattern.hairTypeXIV();
		for (let i = 376; i < 380; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 380, 'border');
		for (let i = 381; i < 387; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 387, 'border');
		for (let i = 388; i < 393; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 393, 'border');
		for (let i = 394; i < 398; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 398, 'border');
		for (let i = 399; i < 404; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 404, 'border');
		for (let i = 405; i < 413; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 413, 'border');
		for (let i = 414; i < 418; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 418, 'border');
		for (let i = 419; i < 427; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 427, 'border');
		for (let i = 428; i < 433; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 433, 'border');
		for (let i = 434; i < 440; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 440, 'border');
		for (let i = 441; i < 446; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 446, 'border');
		for (let i = 447; i < 457; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 457, 'border');
		for (let i = 458; i < 462; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 462, 'border');
		for (let i = 463; i < 477; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 477, 'border');
	},
	hairTypeXVII: () => {
		classRemoverFunc(hairAreaSelector);
		for (let i = 0; i < 10; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 10; i < 18; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 18; i < 36; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 36; i < 38; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 38; i < 46; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 46; i < 48; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 48; i < 62; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		for (let i = 62; i < 64; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 64; i < 76; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 76; i < 78; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 78; i < 89; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 89, 'border');
		for (let i = 90; i < 106; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 106, 'border');
		for (let i = 107; i < 116; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 116, 'border');
		for (let i = 117; i < 135; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 135, 'border');
		for (let i = 136; i < 143; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 143, 'border');
		for (let i = 144; i < 164; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 164, 'border');
		for (let i = 165; i < 171; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 171, 'border');
		for (let i = 172; i < 192; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 192, 'border');
		for (let i = 193; i < 199; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 199, 'border');
		for (let i = 200; i < 220; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 220, 'border');
		for (let i = 221; i < 227; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 227, 'border');
		for (let i = 228; i < 248; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 248, 'border');
		for (let i = 249; i < 255; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 255, 'border');
		for (let i = 256; i < 268; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 268, 'border');
		for (let i = 269; i < 275; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 275, 'border');
		for (let i = 276; i < 286; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 286, 'border');
		for (let i = 287; i < 293; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 293, 'border');
		for (let i = 294; i < 302; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 302, 'border');
		for (let i = 303; i < 309; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 309, 'border');
		for (let i = 310; i < 318; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 318, 'border');
	},
	hairTypeXVIII: () => {
		hairFunctionsBasePattern.hairTypeXVII();
		for (let i = 319; i < 325; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 325, 'border');
		for (let i = 326; i < 329; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 329; i < 331; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 331; i < 334; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 334, 'border');
		for (let i = 335; i < 341; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 341, 'border');
		for (let i = 342; i < 345; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		for (let i = 345; i < 347; i++) {
			areaFiller(hairAreaSelector, i, 'border');
		}
		for (let i = 347; i < 350; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 350, 'border');
		for (let i = 351; i < 357; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 357, 'border');
		for (let i = 358; i < 362; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 362, 'border');
		for (let i = 363; i < 369; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 369, 'border');
		for (let i = 370; i < 374; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 374, 'border');
		for (let i = 375; i < 381; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}
		areaFiller(hairAreaSelector, 381, 'border');
		for (let i = 382; i < 386; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 386, 'border');
		for (let i = 387; i < 393; i++) {
			areaFiller(hairAreaSelector, i, 'bg');
		}

		areaFiller(hairAreaSelector, 393, 'border');
		for (let i = 394; i < 398; i++) {
			areaFiller(hairAreaSelector, i, 'hair');
		}
		areaFiller(hairAreaSelector, 398, 'border');
	}
};

function bowl() {
	hairStyle = 'bowl';
	classRemoverFunc(hairAreaSelector);

	for (let i = 0; i < 176; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 176; i < 188; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 188; i < 203; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 203, 'border');

	for (let i = 204; i < 216; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 216, 'border');
	for (let i = 217; i < 230; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 230, 'border');
	for (let i = 231; i < 245; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 245, 'border');
	for (let i = 246; i < 257; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 257, 'border');
	for (let i = 258; i < 266; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 266, 'border');
	for (let i = 267; i < 276; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 276, 'border');

	for (let i = 277; i < 285; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 285, 'border');

	for (let i = 286; i < 294; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 294, 'border');

	for (let i = 295; i < 301; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 301, 'border');
	for (let i = 302; i < 310; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 310, 'border');
	for (let i = 311; i < 317; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 317, 'border');
	for (let i = 318; i < 326; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 326, 'border');
	for (let i = 327; i < 333; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 333, 'border');
	for (let i = 334; i < 342; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 342, 'border');
	for (let i = 343; i < 345; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 345; i < 347; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 347; i < 349; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 349, 'border');
	for (let i = 350; i < 358; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 358, 'border');
	for (let i = 359; i < 361; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 361, 'border');
	for (let i = 362; i < 370; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 370, 'border');
	for (let i = 371; i < 373; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 373, 'border');
	for (let i = 374; i < 383; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 383; i < 385; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	//Shirt area starts
	for (let i = 385; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function shortCurlyHair() {
	hairFunctionsBasePattern.hairTypeV();
	for (let i = 406; i < 412; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	//Here is where you modify to make the hair longer
	for (let i = 412; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function mediumCurlyHair() {
	hairFunctionsBasePattern.hairTypeVI();
	areaFiller(hairAreaSelector, 506, 'border');
	for (let i = 507; i < 510; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 510, 'border');

	for (let i = 511; i < 515; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 515, 'border');
	for (let i = 516; i < 519; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 519, 'border');

	for (let i = 520; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	hairFunctionsBasePattern.avatarBottom();
}

function longCurlyHair() {
	hairStyle = 'long-curtly-hair';
	hairFunctionsBasePattern.hairTypeVI();
	areaFiller(hairAreaSelector, 506, 'border');
	for (let i = 507; i < 510; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 510, 'border');

	for (let i = 511; i < 515; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 515, 'border');
	for (let i = 516; i < 519; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 519, 'border');
	//Long hair test
	for (let i = 520; i < 527; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 527, 'border');
	for (let i = 528; i < 533; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 533; i < 537; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 537; i < 542; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 542, 'border');
	for (let i = 543; i < 548; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 548, 'border');
	for (let i = 549; i < 556; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 556; i < 558; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 558; i < 565; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 565, 'border');
	for (let i = 566; i < 570; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 570, 'border');
	for (let i = 571; i < 578; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 578; i < 580; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 580; i < 587; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 587, 'border');
	for (let i = 588; i < 592; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 592, 'border');
	for (let i = 593; i < 600; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 600; i < 602; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 602; i < 609; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 609, 'border');
	for (let i = 610; i < 615; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 615, 'border');
	for (let i = 616; i < 620; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 620; i < 622; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 622; i < 624; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	for (let i = 624; i < 626; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 626; i < 630; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 630, 'border');
	for (let i = 631; i < 634; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
}

function shortCurlyHair2() {
	hairFunctionsBasePattern.hairTypeVIII();

	for (let i = 334; i < 343; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	areaFiller(hairAreaSelector, 343, 'border');

	areaFiller(hairAreaSelector, 344, 'hair');

	for (let i = 345; i < 347; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	areaFiller(hairAreaSelector, 347, 'hair');
	areaFiller(hairAreaSelector, 348, 'border');
	//Here only the bg starts
	for (let i = 349; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function mediumCurlyHair2() {
	hairStyle = 'medium-curtly-hair2';
	hairFunctionsBasePattern.hairTypeIX();
	for (let i = 519; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function longCurlyHair2() {
	hairStyle = 'long-curtly-hair2';
	hairFunctionsBasePattern.hairTypeIX();
	for (let i = 519; i < 528; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 528, 'border');

	for (let i = 529; i < 541; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 541, 'border');
	for (let i = 542; i < 549; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 549, 'border');
	for (let i = 550; i < 556; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 556; i < 558; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 558; i < 564; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 564, 'border');
	for (let i = 565; i < 571; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 571, 'border');
	for (let i = 572; i < 578; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 578; i < 580; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 580; i < 586; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 586, 'border');
	for (let i = 587; i < 593; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 593, 'border');
	for (let i = 594; i < 599; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 599, 'border');

	for (let i = 600; i < 602; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	areaFiller(hairAreaSelector, 602, 'border');
	for (let i = 603; i < 608; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 608, 'border');
	for (let i = 609; i < 616; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 616, 'border');
	for (let i = 617; i < 620; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 620, 'border');

	for (let i = 621; i < 625; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	areaFiller(hairAreaSelector, 625, 'border');
	for (let i = 626; i < 629; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 629, 'border');
	for (let i = 630; i < 634; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
}

function shortPuffyHair() {
	hairStyle = 'short-puffy-hair';
	hairFunctionsBasePattern.hairTypeXI();
	for (let i = 320; i < 325; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 325, 'border');
	for (let i = 326; i < 334; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 334, 'border');
	for (let i = 335; i < 341; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 341, 'border');
	for (let i = 342; i < 345; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 345; i < 347; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 347; i < 350; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 350, 'border');
	for (let i = 351; i < 358; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 358, 'border');
	for (let i = 359; i < 361; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 361, 'border');
	for (let i = 362; i < 371; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 371; i < 373; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	//Here only the bg starts
	for (let i = 373; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function mediumPuffyHair() {
	hairStyle = 'medium-puffy-hair';
	hairFunctionsBasePattern.hairTypeXII();
	for (let i = 442; i < 447; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 447, 'border');

	for (let i = 448; i < 456; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 456, 'border');
	for (let i = 457; i < 463; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 463, 'border');
	for (let i = 464; i < 476; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 476, 'border');
	for (let i = 477; i < 484; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 484, 'border');
	for (let i = 485; i < 497; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 497, 'border');
	for (let i = 498; i < 506; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 506, 'border');

	for (let i = 507; i < 519; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 519, 'border');
	for (let i = 520; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	hairFunctionsBasePattern.avatarBottom();
}

function longPuffyHair() {
	hairStyle = 'long-puffy-hair';
	hairFunctionsBasePattern.hairTypeXII();
	for (let i = 442; i < 446; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 446, 'border');

	//------------------------
	for (let i = 447; i < 457; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 457, 'border');

	for (let i = 458; i < 462; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 462, 'border');
	for (let i = 463; i < 477; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 477, 'border');
	for (let i = 478; i < 482; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 482, 'border');
	for (let i = 483; i < 499; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 499, 'border');
	for (let i = 500; i < 504; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 504, 'border');
	for (let i = 505; i < 521; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 521, 'border');
	for (let i = 522; i < 526; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 526, 'border');
	for (let i = 527; i < 543; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 543, 'border');
	for (let i = 544; i < 548; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 548, 'border');
	for (let i = 549; i < 556; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 556; i < 558; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 558; i < 565; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 565, 'border');
	for (let i = 566; i < 571; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 571, 'border');
	for (let i = 572; i < 578; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 578; i < 580; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 580; i < 586; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 586, 'border');
	for (let i = 587; i < 593; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 593, 'border');
	for (let i = 594; i < 600; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 600; i < 602; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 602; i < 608; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 608, 'border');
	for (let i = 609; i < 616; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 616, 'border');
	for (let i = 617; i < 620; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 620; i < 622; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 622; i < 624; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	for (let i = 624; i < 626; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 626; i < 629; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 629, 'border');
	for (let i = 630; i < 634; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
}

function shortCurlyHair3() {
	hairStyle = 'short-curly-hair3';
	classRemoverFunc(hairAreaSelector);
	hairFunctionsBasePattern.hairTypeXIV();
	for (let i = 376; i < 381; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 381, 'border');
	for (let i = 382; i < 386; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 386, 'border');
	for (let i = 387; i < 394; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 394; i < 398; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	//Here the big bg starts
	for (let i = 398; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function mediumCurlyHair3() {
	hairStyle = 'medium-curly-hair3';
	hairFunctionsBasePattern.hairTypeXV();
	for (let i = 478; i < 483; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 483, 'border');
	for (let i = 484; i < 498; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 498, 'border');
	for (let i = 499; i < 506; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 506, 'border');
	for (let i = 507; i < 519; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 519, 'border');

	//
	for (let i = 520; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function longCurlyHair3() {
	hairStyle = 'long-curly-hair3';
	hairFunctionsBasePattern.hairTypeXV();
	for (let i = 478; i < 483; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 483, 'border');

	for (let i = 484; i < 498; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 498, 'border');
	for (let i = 499; i < 504; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 504, 'border');
	for (let i = 505; i < 521; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 521, 'border');
	for (let i = 522; i < 526; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 526, 'border');
	for (let i = 527; i < 543; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 543, 'border');
	for (let i = 544; i < 549; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 549, 'border');
	for (let i = 550; i < 556; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 556; i < 558; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 558; i < 564; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 564, 'border');
	for (let i = 565; i < 570; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 570, 'border');
	for (let i = 571; i < 578; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 578; i < 580; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 580; i < 587; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 587, 'border');
	for (let i = 588; i < 593; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 593, 'border');
	for (let i = 594; i < 599; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 599, 'border');
	for (let i = 600; i < 602; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	areaFiller(hairAreaSelector, 602, 'border');
	for (let i = 603; i < 608; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 608, 'border');
	for (let i = 609; i < 616; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 616, 'border');
	for (let i = 617; i < 620; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 620, 'border');
	for (let i = 621; i < 625; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	areaFiller(hairAreaSelector, 625, 'border');
	for (let i = 626; i < 629; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 629, 'border');
	for (let i = 630; i < 634; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
}

function sixtiesShortHair() {
	hairStyle = 'sixties-short-hair';
	hairFunctionsBasePattern.hairTypeXVII();
	//Base ends here
	for (let i = 319; i < 323; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 323, 'border');
	for (let i = 324; i < 326; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 326, 'border');

	for (let i = 327; i < 329; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 329; i < 331; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 331; i < 333; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 333, 'border');
	for (let i = 334; i < 336; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 336, 'border');
	areaFiller(hairAreaSelector, 337, 'bg');
	areaFiller(hairAreaSelector, 338, 'border');
	areaFiller(hairAreaSelector, 339, 'hair');
	areaFiller(hairAreaSelector, 340, 'border');
	areaFiller(hairAreaSelector, 341, 'bg');
	areaFiller(hairAreaSelector, 342, 'border');
	for (let i = 343; i < 345; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 345; i < 347; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 347; i < 349; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 349, 'border');
	areaFiller(hairAreaSelector, 350, 'bg');
	areaFiller(hairAreaSelector, 351, 'border');
	areaFiller(hairAreaSelector, 352, 'hair');
	for (let i = 353; i < 355; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	areaFiller(hairAreaSelector, 355, 'hair');
	areaFiller(hairAreaSelector, 356, 'border');
	areaFiller(hairAreaSelector, 357, 'bg');
	areaFiller(hairAreaSelector, 358, 'border');
	for (let i = 359; i < 361; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 361, 'border');
	areaFiller(hairAreaSelector, 362, 'bg');
	areaFiller(hairAreaSelector, 363, 'border');
	areaFiller(hairAreaSelector, 364, 'hair');
	for (let i = 365; i < 367; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 367; i < 369; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 369, 'border');
	for (let i = 370; i < 374; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 374, 'border');
	for (let i = 375; i < 377; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 377, 'border');
	areaFiller(hairAreaSelector, 378, 'bg');
	areaFiller(hairAreaSelector, 379, 'border');
	for (let i = 380; i < 388; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 388, 'border');
	for (let i = 389; i < 391; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 391, 'border');
	for (let i = 392; i < 400; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 400, 'border');
	for (let i = 401; i < 404; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 404, 'border');
	for (let i = 405; i < 408; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 408; i < 410; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 410; i < 413; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 413, 'border');
	for (let i = 414; i < 419; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 419; i < 422; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 422; i < 424; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 424; i < 427; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 427; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function sixtiesMediumHair() {
	hairFunctionsBasePattern.hairTypeXVIII();
	for (let i = 399; i < 403; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	areaFiller(hairAreaSelector, 403, 'border');
	for (let i = 404; i < 406; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 406, 'border');
	for (let i = 407; i < 411; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 411, 'border');
	for (let i = 412; i < 414; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 414, 'border');
	for (let i = 415; i < 416; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 416, 'border');
	areaFiller(hairAreaSelector, 417, 'hair');
	areaFiller(hairAreaSelector, 418, 'border');
	areaFiller(hairAreaSelector, 419, 'bg');
	areaFiller(hairAreaSelector, 420, 'border');
	for (let i = 421; i < 425; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 425, 'border');
	areaFiller(hairAreaSelector, 426, 'bg');
	areaFiller(hairAreaSelector, 427, 'border');
	areaFiller(hairAreaSelector, 428, 'hair');
	for (let i = 429; i < 431; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	areaFiller(hairAreaSelector, 431, 'hair');
	areaFiller(hairAreaSelector, 432, 'border');
	areaFiller(hairAreaSelector, 433, 'bg');
	areaFiller(hairAreaSelector, 434, 'border');
	for (let i = 435; i < 439; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 439, 'border');
	areaFiller(hairAreaSelector, 440, 'bg');
	areaFiller(hairAreaSelector, 441, 'border');
	areaFiller(hairAreaSelector, 442, 'hair');
	for (let i = 443; i < 445; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 445; i < 447; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 447, 'border');
	for (let i = 448; i < 456; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 456, 'border');
	for (let i = 457; i < 459; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 459, 'border');
	areaFiller(hairAreaSelector, 460, 'bg');
	areaFiller(hairAreaSelector, 461, 'border');
	for (let i = 462; i < 468; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 468, 'border');
	for (let i = 469; i < 471; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 471, 'border');
	for (let i = 472; i < 478; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 478, 'border');
	for (let i = 479; i < 482; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 482; i < 488; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 488; i < 494; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 494; i < 500; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 500; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	hairFunctionsBasePattern.avatarBottom();
}

function sixtiesLongHair() {
	hairFunctionsBasePattern.hairTypeXVIII();
	for (let i = 399; i < 405; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 405, 'border');
	for (let i = 406; i < 412; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 412, 'border');
	for (let i = 413; i < 419; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 419, 'border');
	for (let i = 420; i < 426; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 426, 'border');
	for (let i = 427; i < 433; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 433, 'border');
	for (let i = 434; i < 440; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 440, 'border');
	for (let i = 441; i < 447; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 447, 'border');
	for (let i = 448; i < 456; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 456, 'border');
	for (let i = 457; i < 464; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 464, 'border');
	for (let i = 465; i < 475; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 475, 'border');
	for (let i = 476; i < 481; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 481, 'border');
	for (let i = 482; i < 484; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 484, 'border');
	for (let i = 485; i < 497; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 497, 'border');
	for (let i = 498; i < 500; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 500, 'border');
	areaFiller(hairAreaSelector, 501, 'bg');
	areaFiller(hairAreaSelector, 502, 'border');
	areaFiller(hairAreaSelector, 503, 'hair');
	areaFiller(hairAreaSelector, 504, 'border');
	areaFiller(hairAreaSelector, 505, 'bg');
	areaFiller(hairAreaSelector, 506, 'border');
	for (let i = 507; i < 519; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 519, 'border');
	areaFiller(hairAreaSelector, 520, 'bg');
	areaFiller(hairAreaSelector, 521, 'border');
	areaFiller(hairAreaSelector, 522, 'hair');
	for (let i = 523; i < 525; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	areaFiller(hairAreaSelector, 525, 'hair');
	areaFiller(hairAreaSelector, 526, 'border');
	areaFiller(hairAreaSelector, 527, 'bg');
	areaFiller(hairAreaSelector, 528, 'border');
	for (let i = 529; i < 541; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 541, 'border');
	areaFiller(hairAreaSelector, 542, 'bg');
	areaFiller(hairAreaSelector, 543, 'border');
	areaFiller(hairAreaSelector, 544, 'hair');
	for (let i = 545; i < 547; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 547; i < 549; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 549, 'border');
	for (let i = 550; i < 556; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 556; i < 558; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 558; i < 564; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 564, 'border');
	for (let i = 565; i < 567; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 567; i < 570; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 570; i < 578; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 578; i < 580; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 580; i < 588; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 588; i < 590; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 590; i < 592; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 592, 'border');
	for (let i = 593; i < 599; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 599, 'border');
	for (let i = 600; i < 602; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	areaFiller(hairAreaSelector, 602, 'border');
	for (let i = 603; i < 609; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 609, 'border');
	for (let i = 610; i < 615; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 615, 'border');
	for (let i = 616; i < 620; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 620, 'border');
	for (let i = 621; i < 625; i++) {
		areaFiller(hairAreaSelector, i, 'shirt');
	}
	areaFiller(hairAreaSelector, 625, 'border');
	for (let i = 626; i < 630; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 630, 'border');
	for (let i = 631; i < 634; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
}

function buns() {
	hairStyle = 'buns';
	classRemoverFunc(hairAreaSelector);
	for (let i = 0; i < 89; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 89; i < 92; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 92; i < 104; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 104; i < 107; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 107; i < 116; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 116, 'border');
	for (let i = 117; i < 120; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 120, 'border');

	for (let i = 121; i < 131; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 131, 'border');

	for (let i = 132; i < 135; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 135, 'border');

	for (let i = 136; i < 143; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 143, 'border');

	for (let i = 144; i < 149; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}

	areaFiller(hairAreaSelector, 149, 'border');

	for (let i = 150; i < 158; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	areaFiller(hairAreaSelector, 158, 'border');

	for (let i = 159; i < 164; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 164, 'border');

	for (let i = 165; i < 171; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 171, 'border');

	for (let i = 172; i < 177; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}

	for (let i = 177; i < 187; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}

	for (let i = 187; i < 192; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 192, 'border');

	for (let i = 193; i < 199; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	areaFiller(hairAreaSelector, 199, 'border');

	for (let i = 200; i < 205; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 205, 'border');
	for (let i = 206; i < 214; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 214, 'border');

	for (let i = 215; i < 220; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}

	areaFiller(hairAreaSelector, 220, 'border');

	for (let i = 221; i < 227; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 227, 'border');

	for (let i = 228; i < 233; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 233; i < 243; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}

	for (let i = 243; i < 248; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 248, 'border');

	for (let i = 249; i < 256; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 256, 'border');

	for (let i = 257; i < 261; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 261, 'border');
	areaFiller(hairAreaSelector, 262, 'border');

	for (let i = 263; i < 267; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}

	areaFiller(hairAreaSelector, 267, 'border');

	for (let i = 268; i < 277; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 277, 'border');

	for (let i = 278; i < 285; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}

	for (let i = 285; i < 297; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	//FIX THE LOCATION OF LOGIC ONCE THERE IS MORE INFO!!!
	//the values of the for loop are the indexes of the surrounderSelector variable
	if (bangType !== 'noBangs' || !bangType) {
		let bangsSurrounderRemoverTarget = surrounderSelector.slice(0, 8);
		classRemoverFunc(bangsSurrounderRemoverTarget);

		for (let i = 0; i < bangsSurrounderRemoverTarget.length; i++) {
			areaFiller(bangsSurrounderRemoverTarget, i, 'hair');
		}
	}

	for (let i = 297; i < 299; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 299; i < 313; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	for (let i = 313; i < 315; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 315; i < 329; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	for (let i = 329; i < 331; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 331; i < 345; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	for (let i = 345; i < 347; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}

	for (let i = 347; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}

	// Here the shirt starts
	hairFunctionsBasePattern.avatarBottom();
}

function mediumDefaultHair() {
	hairStyle = 'bob';
	classRemoverFunc(hairAreaSelector);
	for (let i = 0; i < 12; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 12; i < 16; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 16; i < 38; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 38; i < 40; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 40; i < 44; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 44; i < 46; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 46; i < 64; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	for (let i = 64; i < 66; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 66; i < 74; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 74; i < 76; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	for (let i = 76; i < 91; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 91, 'border');
	for (let i = 92; i < 104; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 104, 'border');
	for (let i = 105; i < 118; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 118, 'border');
	for (let i = 119; i < 133; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 133, 'border');
	for (let i = 134; i < 145; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 145, 'border');
	for (let i = 146; i < 162; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 162, 'border');
	for (let i = 163; i < 172; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 172, 'border');
	for (let i = 173; i < 191; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 191, 'border');

	for (let i = 192; i < 200; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 200, 'border');
	for (let i = 201; i < 219; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 219, 'border');
	for (let i = 220; i < 227; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 227, 'border');

	for (let i = 228; i < 248; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 248, 'border');
	for (let i = 249; i < 255; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 255, 'border');

	for (let i = 256; i < 268; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 268, 'border');
	for (let i = 269; i < 275; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 275, 'border');
	for (let i = 276; i < 286; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 286, 'border');
	for (let i = 287; i < 292; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 292, 'border');

	for (let i = 293; i < 303; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 303, 'border');
	for (let i = 304; i < 308; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 308, 'border');
	for (let i = 309; i < 319; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 319, 'border');
	for (let i = 320; i < 324; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 324, 'border');

	//Here is where the surrounding of the face starts
	for (let i = 325; i < 329; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 329, 'border');

	for (let i = 330; i < 335; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 335, 'border');
	for (let i = 336; i < 340; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 340, 'border');
	for (let i = 341; i < 345; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	for (let i = 345; i < 347; i++) {
		areaFiller(hairAreaSelector, i, 'border');
	}
	//Here is where the surrounding of the face ends
	for (let i = 347; i < 351; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 351, 'border');
	for (let i = 352; i < 356; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 356, 'border');
	for (let i = 357; i < 363; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 363, 'border');
	for (let i = 364; i < 368; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 368, 'border');
	for (let i = 369; i < 375; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 375, 'border');
	for (let i = 376; i < 381; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 381, 'border');
	for (let i = 382; i < 386; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 386, 'border');
	for (let i = 387; i < 393; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 393, 'border');
	for (let i = 394; i < 398; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 398, 'border');
	for (let i = 399; i < 405; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 405, 'border');
	for (let i = 406; i < 412; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 412, 'border');
	for (let i = 413; i < 419; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 419, 'border');
	for (let i = 420; i < 426; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 426, 'border');
	for (let i = 427; i < 434; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 434, 'border');
	for (let i = 435; i < 439; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 439, 'border');
	for (let i = 440; i < 448; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 448, 'border');
	for (let i = 449; i < 455; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 455, 'border');
	for (let i = 456; i < 465; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 465, 'border');
	for (let i = 466; i < 468; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 468, 'border');
	for (let i = 469; i < 471; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 471, 'border');
	for (let i = 472; i < 474; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 474, 'border');
	for (let i = 475; i < 485; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 485, 'border');
	for (let i = 486; i < 488; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 488, 'border');
	for (let i = 489; i < 493; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 493, 'border');
	for (let i = 494; i < 496; i++) {
		areaFiller(hairAreaSelector, i, 'hair');
	}
	areaFiller(hairAreaSelector, 496, 'border');
	for (let i = 497; i < 508; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 508, 'border');
	areaFiller(hairAreaSelector, 509, 'hair');
	areaFiller(hairAreaSelector, 510, 'border');
	for (let i = 511; i < 515; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	areaFiller(hairAreaSelector, 515, 'border');
	areaFiller(hairAreaSelector, 516, 'hair');
	areaFiller(hairAreaSelector, 517, 'border');
	for (let i = 518; i < 529; i++) {
		areaFiller(hairAreaSelector, i, 'bg');
	}
	//Here is where shirt approximately starts
	hairFunctionsBasePattern.avatarBottom();
}

//Bang test area
function hairAreaTest() {
	classRemoverFunc(hairAreaSelector);
}

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
	bangType = 'noBangs';
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
	bangType = 'longBangs';

	classRemoverFunc(surrounderSelector);
	for (let i = 0; i < surrounderSelector.length - 4; i++) {
		areaFiller(surrounderSelector, i, 'hair');
	}
	//Exceptions
	//repeated code, check out later
	if (hairStyle == 'buns') {
		let longBangsSides = surrounderSelector.slice(12, 16);
		classRemoverFunc(longBangsSides);
		for (let i = 0; i < longBangsSides.length; i++) {
			areaFiller(longBangsSides, i, 'border');
		}
		let bunMiddle = surrounderSelector.slice(8, 12);
		classRemoverFunc(bunMiddle);
		for (let i = 0; i < bunMiddle.length; i++) {
			areaFiller(bunMiddle, i, 'border');
		}
	}

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
	bangType = 'mediumBangs';
	classRemoverFunc(surrounderSelector);

	for (let i = 0; i < surrounderSelector.length; i++) {
		areaFiller(surrounderSelector, i, 'hair');
	}

	//Exceptions
	if (hairStyle == 'buns') {
		let longBangsSides = surrounderSelector.slice(12, 16);
		classRemoverFunc(longBangsSides);
		for (let i = 0; i < longBangsSides.length; i++) {
			areaFiller(longBangsSides, i, 'border');
		}
		let bunMiddle = surrounderSelector.slice(8, 12);
		classRemoverFunc(bunMiddle);
		for (let i = 0; i < bunMiddle.length; i++) {
			areaFiller(bunMiddle, i, 'border');
		}
	}
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
	bangType = 'shortBangs';
	classRemoverFunc(surrounderSelector);
	for (let i = 0; i < surrounderSelector.length; i++) {
		areaFiller(surrounderSelector, i, 'hair');
	}

	//Exceptions
	if (hairStyle == 'buns') {
		let bunMiddle = surrounderSelector.slice(8, 12);
		classRemoverFunc(bunMiddle);
		for (let i = 0; i < bunMiddle.length; i++) {
			areaFiller(bunMiddle, i, 'border');
		}
	}
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

function leftSideBangsFunc() {
	bangType = 'leftSideBuns';
	classRemoverFunc(bangAreaSelector);
	//Exception
	if (hairStyle == 'buns') {
		let bunException = surrounderSelector.slice(0, 8);
		classRemoverFunc(bunException);
		for (let i = 0; i < bunException.length; i++) {
			areaFiller(bunException, i, 'hair');
		}
	} else {
		//CHANGE THIS WHEN YOU HAVE MORE HAIR STYLES
		let exception = surrounderSelector.slice(11, 16);
		classRemoverFunc(exception);
		for (let i = 0; i < exception.length; i++) {
			areaFiller(exception, i, 'hair');
		}
	}
	for (let i = 0; i < 6; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	for (let i = 6; i < 8; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 8; i < 14; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	areaFiller(bangAreaSelector, 14, 'border');
	for (let i = 15; i < 17; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	areaFiller(bangAreaSelector, 17, 'border');
	for (let i = 18; i < 23; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	for (let i = 23; i < 25; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 25; i < 28; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	areaFiller(bangAreaSelector, 28, 'border');
	areaFiller(bangAreaSelector, 29, 'hair');
	for (let i = 30; i < 32; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	for (let i = 32; i < 35; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 35; i < 41; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	areaFiller(bangAreaSelector, 41, 'border');
	for (let i = 42; i < 44; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 44; i < 53; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	areaFiller(bangAreaSelector, 53, 'border');
}

function rightSideBangsFunc() {
	bangType = 'rightSideBuns';
	classRemoverFunc(bangAreaSelector);
	//Exception
	if (hairStyle == 'buns') {
		let bunException = surrounderSelector.slice(0, 8);
		classRemoverFunc(bunException);
		for (let i = 0; i < bunException.length; i++) {
			areaFiller(bunException, i, 'hair');
		}
	} else {
		//CHANGE THIS WHEN YOU HAVE MORE HAIR STYLES
		let exception = surrounderSelector.slice(11, 16);
		classRemoverFunc(exception);
		for (let i = 0; i < exception.length; i++) {
			areaFiller(exception, i, 'hair');
		}
	}
	for (let i = 0; i < 2; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 2; i < 8; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	areaFiller(bangAreaSelector, 8, 'border');

	for (let i = 9; i < 11; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	areaFiller(bangAreaSelector, 11, 'border');
	for (let i = 12; i < 18; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	areaFiller(bangAreaSelector, 18, 'hair');
	areaFiller(bangAreaSelector, 19, 'border');
	for (let i = 20; i < 23; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	for (let i = 23; i < 25; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 25; i < 30; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	areaFiller(bangAreaSelector, 30, 'border');

	for (let i = 31; i < 37; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	for (let i = 37; i < 40; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
	for (let i = 40; i < 42; i++) {
		areaFiller(bangAreaSelector, i, 'hair');
	}
	areaFiller(bangAreaSelector, 42, 'border');

	for (let i = 43; i < 52; i++) {
		areaFiller(bangAreaSelector, i, 'skin');
	}
	for (let i = 52; i < 54; i++) {
		areaFiller(bangAreaSelector, i, 'border');
	}
}

// Hair Color Section
const hairButton = document.getElementById('hair-color');
hairButton.addEventListener('input', colorFunc);

const hairStyleOption = document.getElementById('formHairStyle');
hairStyleOption.addEventListener('change', patternPickerFunc);
