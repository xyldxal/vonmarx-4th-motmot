const hoverSound = new Audio('assets/audio/hover.mp3');
const enterBtnSound = new Audio('assets/audio/enterButton.mp3');
const selectSound = new Audio('assets/audio/select.mp3');
const clickSound = new Audio('assets/audio/click.mp3');

hoverSound.volume = 0.1;
enterBtnSound.volume = 0.2;
selectSound.volume = 0.1;
clickSound.volume = 0.3;

function play(sound) {
  sound.currentTime = 0;
  sound.play().catch(() => { });
}

/* =================== INDEX.HTML =================== */
document.querySelectorAll('.answerInput').forEach(el => {
  el.addEventListener('mouseenter', () => play(hoverSound));
  el.addEventListener('click', () => play(clickSound));
});

document.querySelectorAll('.enterBtn').forEach(el => {
  el.addEventListener('mouseenter', () => play(enterBtnSound));
  el.addEventListener('click', () => play(clickSound));
});

/* =================== MENU.HTML =================== */
document.querySelectorAll('.menuBtn').forEach(el => {
  el.addEventListener('mouseenter', () => play(hoverSound));
});

  /* =================== BACK & LINK BUTTONS =================== */
  document.querySelectorAll('.backBtn, .playlistBtn').forEach(el => {
    el.addEventListener('mouseenter', () => play(hoverSound));
  });

  /* =================== CARD HOVERS (song + collage) =================== */
  document.querySelectorAll('.videoCard, .photo').forEach(el => {
    el.addEventListener('mouseenter', () => play(selectSound));
  });

  /* =================== RETRY / LINK BUTTONS =================== */
  document.querySelectorAll('.retryLink').forEach(el => {
    el.addEventListener('mouseenter', () => play(enterBtnSound));
  });
