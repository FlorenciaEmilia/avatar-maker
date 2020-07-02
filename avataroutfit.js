const shirtButton = document.getElementById('shirt-color');
shirtButton.addEventListener('change', colorFunc);

function colorFunc() {
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
}
