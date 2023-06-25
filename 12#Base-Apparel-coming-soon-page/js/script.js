const form = document.querySelector(".form");
const emailInput = document.querySelector(".email");
const btn = document.querySelector(".sendEmail");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value === "") {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    form.submit();
  }
});
