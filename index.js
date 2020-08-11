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
let eyeSelector = document.getElementById("eyeColorSelector");
let eyeUl = document.getElementById("eyeColor");
eyeSelector.addEventListener(
  "click",
  () => {
    toggleFunction(eyeUl);
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
