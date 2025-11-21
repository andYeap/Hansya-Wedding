/* ========================================================================= */
// Smooth Scroll
// var scroll = new SmoothScroll('a[href*="#"]');

/* ========================================================================= */
// Navbar Hidden or Visible
const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

/* ========================================================================= */
// Backsound Music Autoplay
const track = document.getElementById("track");
const controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    controlBtn.className = "pause";
  } else {
    track.pause();
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);

track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

// Attempt autoplay on page load
window.addEventListener("load", function () {
  track.muted = false; // Unmute if you want sound immediately
  track.play().then(() => {
    controlBtn.className = "pause";
  }).catch((error) => {
    console.log("Autoplay failed:", error);
    controlBtn.className = "play";
  });
});

/* ========================================================================= */
// RSVP
function gotoWhatsapp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let url =
    "https://wa.me/6282220004080?text=" +
    "Nama : " + name + "%0a" +
    "Email : " + email + "%0a" +
    "Phone : " + phone + "%0a" +
    "Pesan : " + message;

  window.open(url, "_blank").focus();
}

/* ========================================================================= */
// CopyText-Gifts
let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", () => {
  let input = document.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2000);
});