'use strict';

(function () {
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var ENTER_KEY = 'Enter';
  var ESCAPE_KEY = 'Escape';

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('input[name=fireball-color]');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
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

  wizardCoat.addEventListener('click', function () {
    addRandomColor(wizardCoat, wizardCoatInput, WIZARD_COAT, 'fill');
  });

  wizardEyes.addEventListener('click', function () {
    addRandomColor(wizardEyes, wizardEyesInput, WIZARD_EYES, 'fill');
  });

  fireball.addEventListener('click', function () {
    addRandomColor(fireball, fireballInput, WIZARD_FIREBALL, 'background');
  });

  var addRandomColor = function (wizardElement, wizardElementInput, colorArr, styleProperty) {
    var randomColor = colorArr[window.utils.getRandomNumber(colorArr.length)];

    wizardElement.style[styleProperty] = randomColor;

    wizardElementInput.value = randomColor;
  };
})();
