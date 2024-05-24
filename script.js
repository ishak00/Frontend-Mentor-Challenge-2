const defaultFelt = document.querySelector(".defelt");
const secondary = document.querySelector(".secondary");
const submit = document.querySelector(".submit");
const numbers = document.querySelectorAll(".num");
const response = document.getElementById("response");

let selectedRating = [];

numbers.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    ele.style.background = "#FC7614";
    ele.style.color = "#fff";
    const selectedNumber = event.target.dataset.rating;
    selectedRating.push(selectedNumber);

    updateResponse();
  });
});

submit.addEventListener("click", () => {
  secondary.style.display = "block";
  defaultFelt.style.display = "none";

  if (selectedRating.length === 0) {
    response.innerHTML = "You Must Choose A Rating !!!";
  } else {
    const firstRating = selectedRating[0];
    const lastRating = selectedRating[selectedRating.length - 1];
    response.innerHTML = `You Selected ${firstRating} Out Of ${lastRating}`;
  }
});

function updateResponse() {
  if (selectedRating.length > 0) {
    const firstRating = selectedRating[0];
    const lastRating = selectedRating[selectedRating.length - 1];
    response.innerHTML = `You Selected ${firstRating} Out Of ${lastRating}`;
  }
}
