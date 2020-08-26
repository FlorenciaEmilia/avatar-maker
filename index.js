let downLoadButton = document.getElementById("downloadBtn");

downLoadButton.addEventListener("click", () => {
  html2canvas(document.querySelector("#avatar-container")).then(function (
    canvas
  ) {
    //--------------------------------------------
    /*Save avatar*/
    // Get a base64 data string
    downLoadButton.download = "avatar.jpg";
    var imageType = "image/png";
    var imageData = canvas.toDataURL(imageType);
    // Open the data string in the current window
    document.location.href = imageData.replace(imageType, "image/octet-stream");
  });
});

//Close divs if clicked outside of it
let allSelectors = document.querySelectorAll(".section_8bit");
let allUls = document.querySelectorAll(".selectionInfo");
document.addEventListener("mouseup", function (e) {
  for (let i = 0; i < allSelectors.length; i++) {
    hidingFunction(e, allSelectors[i], allUls[i]);
  }
});

function hidingFunction(evt, selector, ul) {
  if (ul.contains(evt.target) || !selector.contains(evt.target)) {
    ul.style.display = "none";
  }
}

//Triggering toggle skin
let skinColorSelector = document.getElementById("skinColorContainer");
let skinColorUl = document.getElementById("skinColor");
skinColorSelector.addEventListener(
  "click",
  () => {
    toggleFunction(skinColorUl);
  },
  false
);

//Triggering toggle nose
let noseSelector = document.getElementById("noseContainer");
let noseUl = document.getElementById("nose");
noseSelector.addEventListener(
  "click",
  () => {
    toggleFunction(noseUl);
  },
  false
);

//Triggering toggle eye color
let eyeColorSelector = document.getElementById("eyeColorContainer");
let eyeColorUl = document.getElementById("eyeColor");
eyeColorSelector.addEventListener(
  "click",
  () => {
    toggleFunction(eyeColorUl);
  },
  false
);

//Triggering toggle mouth
let mouthSelector = document.getElementById("mouthContainer");
let mouthUl = document.getElementById("mouth");
mouthSelector.addEventListener(
  "click",
  () => {
    toggleFunction(mouthUl);
  },
  false
);
//Triggering toggle eye
let eyeSelector = document.getElementById("eyeContainer");
let eyeUl = document.getElementById("eye");
eyeSelector.addEventListener(
  "click",
  () => {
    toggleFunction(eyeUl);
  },
  false
);

//Triggering toggle hair
let hairSelector = document.getElementById("hairContainer");
let hairUl = document.getElementById("hair");
hairSelector.addEventListener(
  "click",
  () => {
    toggleFunction(hairUl);
  },
  false
);

//Triggering bang section
let bangSelector = document.getElementById("bangsContainer");
let bangsUl = document.getElementById("bangs");
bangSelector.addEventListener(
  "click",
  () => {
    toggleFunction(bangsUl);
  },
  false
);

function toggleFunction(selector) {
  if (selector.style.display === "none" || selector.style.display === "") {
    selector.style.display = "inline-flex";
  } else {
    selector.style.display = "none";
  }
}
