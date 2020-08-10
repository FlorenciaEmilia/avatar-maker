let downLoadButton = document.getElementById("downloadBtn");
downLoadButton.addEventListener("click", () => {
  html2canvas(document.body).then(function (canvas) {
    // Export the canvas to its data URI representation
    var base64image = canvas.toDataURL("image/png");
    // Open the image in a new window
    let win = window.open();
    win.document.write(
      '<iframe src="' +
        base64image +
        '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
    );
  });
});
