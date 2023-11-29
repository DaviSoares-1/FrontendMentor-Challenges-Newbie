const ratingList = document.querySelectorAll('.rating-list li');
const ratingDisplay = document.querySelector('.rating');

function submitRate(event) {
  ratingList.forEach((rate) => {
    rate.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
  ratingDisplay.innerText = event.currentTarget.innerText;
}

ratingList.forEach((rate) => {
  rate.addEventListener('click', submitRate);
});

const submitBtn = document.querySelector(".submit-btn");
const card = document.querySelector('.rating-State');
const submitState = document.querySelector('.submit-State')

function activateAnima(event) {
  event.preventDefault();
  card.classList.add('activeAnima');
  submitState.classList.add('activeAnima');
}

submitBtn.addEventListener('click', activateAnima)