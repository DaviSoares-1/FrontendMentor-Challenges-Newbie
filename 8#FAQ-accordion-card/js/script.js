const asks = document.querySelectorAll(".faq-list button");

/** @param {MouseEvent} event */
function activateAsk(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  question.classList.toggle("changeStyles")

  const activated = answer.classList.contains("active");
  question.setAttribute("aria-expanded", activated);
}

function askEvents(faq) {
  faq.addEventListener("click", activateAsk);
}

asks.forEach(askEvents);
