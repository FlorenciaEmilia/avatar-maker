let noseAreaSelector = document.querySelectorAll("[id^='nose-']");

function nose1() {
  classRemoverFunc(noseAreaSelector);
  for (let i = 0; i < 5; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  areaFiller(noseAreaSelector, 5, "border");
  for (let i = 6; i < 9; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  for (let i = 9; i < 11; i++) {
    areaFiller(noseAreaSelector, i, "border");
  }
  areaFiller(noseAreaSelector, 11, "skin");
}

function nose2() {
  classRemoverFunc(noseAreaSelector);
  for (let i = 0; i < 6; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  areaFiller(noseAreaSelector, 6, "border");
  for (let i = 7; i < 9; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  for (let i = 9; i < 11; i++) {
    areaFiller(noseAreaSelector, i, "border");
  }
  areaFiller(noseAreaSelector, 11, "skin");
}

function nose3() {
  classRemoverFunc(noseAreaSelector);
  for (let i = 0; i < 9; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  for (let i = 9; i < 11; i++) {
    areaFiller(noseAreaSelector, i, "border");
  }
  areaFiller(noseAreaSelector, 11, "skin");
}

function nose4() {
  classRemoverFunc(noseAreaSelector);
  for (let i = 0; i < 5; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  areaFiller(noseAreaSelector, 5, "border");
  areaFiller(noseAreaSelector, 6, "skin");
  areaFiller(noseAreaSelector, 7, "border");
  areaFiller(noseAreaSelector, 8, "skin");
  for (let i = 9; i < 11; i++) {
    areaFiller(noseAreaSelector, i, "border");
  }
  areaFiller(noseAreaSelector, 11, "skin");
}

function nose5() {
  classRemoverFunc(noseAreaSelector);
  for (let i = 0; i < 4; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  areaFiller(noseAreaSelector, 4, "border");
  for (let i = 5; i < 7; i++) {
    areaFiller(noseAreaSelector, i, "skin");
  }
  for (let i = 7; i <= 11; i++) {
    areaFiller(noseAreaSelector, i, "border");
  }
}

let noseOptions = document.querySelectorAll("#nose li");
for (let i = 0; i < noseOptions.length; i++) {
  noseOptions[i].addEventListener("click", () => {
    patternPickerFuncBeta(noseOptions[i].getAttribute("data-nose"));
  });
}
