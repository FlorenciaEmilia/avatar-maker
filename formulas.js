//Remove previous classes, leaving the div class empty to add the new class
const classesToRemove = new RegExp(
  /skin|bg|border|hair|shirt|eyeball|eyeColor/,
  "gi"
);

let classEraser = (element) => {
  if (element.className.match(classesToRemove)) {
    element.className = element.className.replace(classesToRemove, "");
  }
};

//Div class Filler, it takes the area to fill, the index and the name of the class name to apply css styling
let areaFiller = (fillArea, index, cssClassName) => {
  fillArea[index].className += cssClassName;
};

//This classRemover Function takes an entire area and deletes all the classes, using the classEraser function
let classRemoverFunc = (areaSelector) => {
  for (let i = 0; i < areaSelector.length; i++) {
    classEraser(areaSelector[i]);
  }
};

//Color picker formula. The user can pick a custom color in the color input and the div preset color for that class will change
function colorFunc() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

//Color picker formula. The user can pick a custom color in the color input and the div preset color for that class will change. This func is the beta version for the new display using li's for better styling
function colorFuncBeta(name, value) {
  document.documentElement.style.setProperty(`--${name}`, value);
}

//Universal Pattern picker
function patternPickerFunc() {
  let funcName = this.value;
  let func = window[funcName];
  if (typeof func === "function") {
    func();
  }
}

//Universal Pattern Picker Beta for the new html setup using li's for better styling
function patternPickerFuncBeta(value) {
  let func = window[value];
  if (typeof func === "function") {
    func();
  }
}
