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
// Backsound Music
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

// Autoplay on load
window.addEventListener("load", function () {
  track.muted = false; // Hapus jika ingin autoplay dengan suara langsung
  track.play().then(() => {
    controlBtn.className = "pause";
  }).catch((err) => {
    console.log("Autoplay gagal:", err);
    controlBtn.className = "play";
  });
});

/* ========================================================================= */
// RSVP
const button = document.getElementById("btn-whatsapp");

button.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const url =
    "https://wa.me/6282220004080?text=" +
    "Nama : " + name + "%0a" +
    "Email : " + email + "%0a" +
    "Phone : " + phone + "%0a%0a" +
    "Pesan : %0a" + message;

  window.open(url, "_blank").focus();
});

/* ========================================================================= */
// CopyText-Gifts
const copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(() => {
    copyText.classList.remove("active");
  }, 2000);
});