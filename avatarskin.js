// let skinForm = document.getElementById("skinForm");
// skinForm.addEventListener("change", colorFunc);

// Styling skin color options (Under test)
let skinColorOptions = document.querySelectorAll("#skinColor li");

for (let i = 0; i < skinColorOptions.length; i++) {
  skinColorOptions[i].style.backgroundColor = `${skinColorOptions[
    i
  ].getAttribute("data-color")}`;
  skinColorOptions[i].addEventListener("click", () => {
    colorFuncBeta("skinColor", skinColorOptions[i].getAttribute("data-color"));
  });
}
