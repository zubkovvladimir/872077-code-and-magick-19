'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var ESCAPE_KEY = 'Escape';

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var defaultCoordWindowX = setup.style.top;
  var defaultCoordWindowY = setup.style.left;

  var openPopupEscapeHandler = function (evt) {
    if (evt.key === ESCAPE_KEY) {
      closePopupHandler();
    }
  };

  var openPopupHandler = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', openPopupEscapeHandler);
  };

  var closePopupHandler = function () {
    setup.classList.add('hidden');
    setup.style.top = defaultCoordWindowX;
    setup.style.left = defaultCoordWindowY;
    document.removeEventListener('keydown', openPopupEscapeHandler);
  };


  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopupHandler();
    }
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopupHandler();
    }
  });

  setupOpen.addEventListener('click', openPopupHandler);
  setupClose.addEventListener('click', closePopupHandler);

  userName.addEventListener('focus', function () {
    document.removeEventListener('keydown', openPopupEscapeHandler);
  });

  userName.addEventListener('blur', function () {
    document.addEventListener('keydown', openPopupEscapeHandler);
  });

})();
