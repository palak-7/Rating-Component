const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const ratingSummary = document.querySelector(".rating-summary");
let selectedRating;
ratingBtns.forEach((button) => {
  button.addEventListener("click", () => {
    ratingBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    selectedRating = button.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    thankYouState.classList.remove("hidden");
    ratingState.classList.add("hidden");
    ratingSummary.innerText = `You selected ${selectedRating} out of 5`;
  }
});
