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

// Styling skin color options
let skinColorOptions = document.querySelectorAll("#skin-color li");
console.log(skinColorOptions);
for (let i = 0; i < skinColorOptions.length; i++) {
  console.log(skinColorOptions[i].getAttribute("data-color"));
  skinColorOptions[i].style.backgroundColor = `${skinColorOptions[
    i
  ].getAttribute("data-color")}`;
}
