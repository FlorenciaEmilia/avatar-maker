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

//Triggering toggle skin
let skinColorSelector = document.getElementById("skinColorSelector");
let skinColorUl = document.getElementById("skinColor");
skinColorSelector.addEventListener(
  "click",
  () => {
    toggleFunction(skinColorUl);
  },
  false
);

//Triggering toggle nose
let noseSelector = document.getElementById("noseSelector");
let noseUl = document.getElementById("nose");
noseSelector.addEventListener(
  "click",
  () => {
    toggleFunction(noseUl);
  },
  false
);

//Triggering toggle eye color
let eyeColorSelector = document.getElementById("eyeColorSelector");
let eyeColorUl = document.getElementById("eyeColor");
eyeColorSelector.addEventListener(
  "click",
  () => {
    toggleFunction(eyeColorUl);
  },
  false
);

//Triggering toggle mouth
let mouthSelector = document.getElementById("mouthSelector");
let mouthUl = document.getElementById("mouth");
mouthSelector.addEventListener(
  "click",
  () => {
    toggleFunction(mouthUl);
  },
  false
);
//Triggering toggle eye
let eyeSelector = document.getElementById("eyeSelector");
let eyeUl = document.getElementById("eye");
eyeSelector.addEventListener(
  "click",
  () => {
    toggleFunction(eyeUl);
  },
  false
);

//Triggering toggle hair
let hairSelector = document.getElementById("hairSelector");
let hairUl = document.getElementById("hair");
hairSelector.addEventListener(
  "click",
  () => {
    toggleFunction(hairUl);
  },
  false
);

//Triggering bang section
let bangSelector = document.getElementById("bangsSelector");
let bangsUl = document.getElementById("bangs");
bangsSelector.addEventListener(
  "click",
  () => {
    toggleFunction(bangsUl);
  },
  false
);

function toggleFunction(selector) {
  if (selector.style.display === "none") {
    selector.style.display = "inline-flex";
  } else {
    selector.style.display = "none";
  }
  // selector.style.display =
  //   selector.style.display === "none" ? "inline-flex" : selector.style.display === "inline-flex"?"none";
}
