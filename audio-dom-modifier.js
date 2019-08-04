const audioEls = document.querySelectorAll('.sound.audio_play_button');
const word = document.querySelector('.headword .hw').textContent;
audioEls.forEach(audioEl => {
  const linkEl = document.createElement('a');
  linkEl.innerText = 'Download';
  const link = audioEl.getAttribute('data-src-mp3');
  linkEl.setAttribute('href', link);
  linkEl.setAttribute('download', word + '.mp3');
  linkEl.classList.add('cadl-link');
  const parent = audioEl.parentNode;
  parent.insertBefore(linkEl, audioEl);
})