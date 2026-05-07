let controlSpacing = document.querySelector("#spacingRange");

controlSpacing.addEventListener("input", handleClickOnInput);

function handleClickOnInput() {
  let valeur2 = controlSpacing.value + controlSpacing.dataset.sizing;
  document.documentElement.style.setProperty("--spacing", valeur2);
}

let controlBlur = document.querySelector("#blurRange");

controlBlur.addEventListener("input", handleClickOnInput2);

function handleClickOnInput2() {
  let valeur = controlBlur.value + controlBlur.dataset.sizing;
  document.documentElement.style.setProperty("--blur", valeur);
}

let controlColor = document.querySelector(".shift2");

controlColor.addEventListener("input", handleClickOnInput3);

function handleClickOnInput3() {
      document.documentElement.style.setProperty("--color", controlColor.value);
}