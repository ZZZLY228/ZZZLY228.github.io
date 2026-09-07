const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewer-image');
const viewerCaption = document.getElementById('viewer-caption');

document.querySelectorAll('[data-image]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    viewerImage.src = trigger.dataset.image;
    viewerImage.alt = trigger.querySelector('img')?.alt || '';
    viewerCaption.textContent = trigger.dataset.caption || '';
    viewer.showModal();
  });
});

document.getElementById('viewer-close').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});
