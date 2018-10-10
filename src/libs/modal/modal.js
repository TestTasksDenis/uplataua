function Modal(selector) {
  this.selector = selector;
  const $modal = document.querySelector('.modal');
  const $triggers = document.querySelectorAll(selector);
  const $modalWindows = document.querySelectorAll('.modal-window');

  $triggers.forEach(item => {
    item.addEventListener('click', () => {
      const modalId = +item.getAttribute('data-modal');
      $modalWindows.forEach(item => {
        if (+item.getAttribute('data-modal') === modalId) {
            $modal.classList.add('active');
            item.classList.add('active');
        }
      });
    });
  });

  $modalWindows.forEach(item => {
    item.addEventListener('click', $event => $event.stopPropagation())
  });

  $modal.addEventListener('click', function () {
    this.classList.remove('active');
    $modalWindows.forEach(item => {
      item.classList.remove('active');
    });
  });
}

window.onload = function () {
  new Modal('.modal-trigger');
};
