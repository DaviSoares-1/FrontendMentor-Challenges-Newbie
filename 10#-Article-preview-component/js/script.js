const shareBtn = document.querySelector(".share-icon");
const socialIcons = document.querySelector(".social-media");
const shareIcon = document.querySelector(".share");

function activateShareDesktop() {
  socialIcons.classList.toggle("active");

  if (socialIcons.classList.contains("active")) {
    shareBtn.style.background = "hsl(214, 17%, 51%)";
    shareIcon.setAttribute("src", "./images/icon-share-clicked.svg");
  } else {
    shareBtn.style.background = "hsl(210, 46%, 95%)";
    shareIcon.setAttribute("src", "./images/icon-share.svg");
  }
}

shareBtn.addEventListener("click", activateShareDesktop);
