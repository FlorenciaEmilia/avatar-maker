let mouthAreaSelector = document.querySelectorAll("[id^='mouth-']");

let mouthFunctions = {
	mouthTypeI: () => {
		classRemoverFunc(mouthAreaSelector);
		mouthAreaSelector[0].className += 'border';
		mouthAreaSelector[1].className += 'border';
		mouthAreaSelector[2].className += 'border';
		mouthAreaSelector[3].className += 'border';
		mouthAreaSelector[4].className += 'border';
		mouthAreaSelector[5].className += 'border';
	},
	mouthTypeII: () => {
		classRemoverFunc(mouthAreaSelector);
		mouthAreaSelector[0].className += 'skin';
		mouthAreaSelector[1].className += 'skin';
		mouthAreaSelector[2].className += 'border';
		mouthAreaSelector[3].className += 'border';
		mouthAreaSelector[4].className += 'border';
		mouthAreaSelector[5].className += 'border';
	}
};

let mouthTypeIBtn = document.getElementById('mouthI');
mouthTypeIBtn.addEventListener('click', mouthFunctions.mouthTypeI);

let mouthTypeIIBtn = document.getElementById('mouthII');
mouthTypeIIBtn.addEventListener('click', mouthFunctions.mouthTypeII);

