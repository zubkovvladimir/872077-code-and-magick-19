'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');
  var setup = document.querySelector('.setup');

  var saveHandler = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
  };

  form.addEventListener('submit', saveHandler);

})();
