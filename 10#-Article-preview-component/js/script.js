const shareBtn = document.querySelector(".share-icon");
const socialIcons = document.querySelector(".social-media");
const shareIcon = document.querySelector(".share");
let screenWidth = window.innerWidth;

function activateShareDesktop() {
  socialIcons.classList.toggle("active");

  if (socialIcons.classList.contains("active")) {
    shareBtn.style.background = "hsl(214, 17%, 51%)";
    shareIcon.setAttribute("src", "./images/icon-share-clicked.svg");
  } else {
    shareBtn.style.background = "hsl(210, 46%, 95%)";
    shareIcon.setAttribute("src", "./images/icon-share.svg");
    location.reload()
  }
}

function activateShareMobile() {
  socialIcons.classList.toggle("mobile");

  if (socialIcons.classList.contains("mobile")) {
    shareBtn.style.background = "hsl(214, 17%, 51%)";
    shareIcon.setAttribute("src", "./images/icon-share-clicked.svg");
  } else {
    shareBtn.style.background = "hsl(210, 46%, 95%)";
    shareIcon.setAttribute("src", "./images/icon-share.svg");
    location.reload()
  }
}

if (screenWidth > 800) {
  shareBtn.addEventListener("click", activateShareDesktop);
} else {
  shareBtn.addEventListener("click", activateShareMobile);
}

