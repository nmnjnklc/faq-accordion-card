const firstRadio = document.querySelector("#firstQuestion");
const secondRadio = document.querySelector("#secondQuestion");
const thirdRadio = document.querySelector("#thirdQuestion");
const fourthRadio = document.querySelector("#fourthQuestion");
const fifthRadio = document.querySelector("#fifthQuestion");

const firstLabel = document.querySelector("#firstLabel");
const secondLabel = document.querySelector("#secondLabel");
const thirdLabel = document.querySelector("#thirdLabel");
const fourthLabel = document.querySelector("#fourthLabel");
const fifthLabel = document.querySelector("#fifthLabel");

const firstSvg = document.querySelector("#firstSvg");
const secondSvg = document.querySelector("#secondSvg");
const thirdSvg = document.querySelector("#thirdSvg");
const fourthSvg = document.querySelector("#fourthSvg");
const fifthSvg = document.querySelector("#fifthSvg");

document.addEventListener(
  "click",
  () => {
    if (firstRadio.checked) {
      firstLabel.classList.add("active-label");
      secondLabel.classList.remove("active-label");
      thirdLabel.classList.remove("active-label");
      fourthLabel.classList.remove("active-label");
      fifthLabel.classList.remove("active-label");

      firstSvg.classList.add("rotate");
      secondSvg.classList.remove("rotate");
      thirdSvg.classList.remove("rotate");
      fourthSvg.classList.remove("rotate");
      fifthSvg.classList.remove("rotate");
    } else if (secondRadio.checked) {
      firstLabel.classList.remove("active-label");
      secondLabel.classList.add("active-label");
      thirdLabel.classList.remove("active-label");
      fourthLabel.classList.remove("active-label");
      fifthLabel.classList.remove("active-label");

      firstSvg.classList.remove("rotate");
      secondSvg.classList.add("rotate");
      thirdSvg.classList.remove("rotate");
      fourthSvg.classList.remove("rotate");
      fifthSvg.classList.remove("rotate");
    } else if (thirdRadio.checked) {
      firstLabel.classList.remove("active-label");
      secondLabel.classList.remove("active-label");
      thirdLabel.classList.add("active-label");
      fourthLabel.classList.remove("active-label");
      fifthLabel.classList.remove("active-label");

      firstSvg.classList.remove("rotate");
      secondSvg.classList.remove("rotate");
      thirdSvg.classList.add("rotate");
      fourthSvg.classList.remove("rotate");
      fifthSvg.classList.remove("rotate");
    } else if (fourthRadio.checked) {
      firstLabel.classList.remove("active-label");
      secondLabel.classList.remove("active-label");
      thirdLabel.classList.remove("active-label");
      fourthLabel.classList.add("active-label");
      fifthLabel.classList.remove("active-label");

      firstSvg.classList.remove("rotate");
      secondSvg.classList.remove("rotate");
      thirdSvg.classList.remove("rotate");
      fourthSvg.classList.add("rotate");
      fifthSvg.classList.remove("rotate");
    } else if (fifthRadio.checked) {
      firstLabel.classList.remove("active-label");
      secondLabel.classList.remove("active-label");
      thirdLabel.classList.remove("active-label");
      fourthLabel.classList.remove("active-label");
      fifthLabel.classList.add("active-label");

      firstSvg.classList.remove("rotate");
      secondSvg.classList.remove("rotate");
      thirdSvg.classList.remove("rotate");
      fourthSvg.classList.remove("rotate");
      fifthSvg.classList.add("rotate");
    }
  },
  true
);
