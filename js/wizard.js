'use strict';

(function () {
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('input[name=fireball-color]');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');

  var wizard = {
    eyesChangeHandler: function () {},
    coatChangeHandler: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var randomColor = WIZARD_COAT[window.utils.getRandomNumber(WIZARD_COAT.length)];

    wizardCoat.style.fill = randomColor;
    wizardCoatInput.value = randomColor;

    wizard.coatChangeHandler(randomColor);
  });

  wizardEyes.addEventListener('click', function () {
    var randomColor = WIZARD_EYES[window.utils.getRandomNumber(WIZARD_EYES.length)];

    wizardEyes.style.fill = randomColor;
    wizardEyesInput.value = randomColor;

    wizard.eyesChangeHandler(randomColor);
  });

  fireball.addEventListener('click', function () {
    var randomColor = WIZARD_FIREBALL[window.utils.getRandomNumber(WIZARD_FIREBALL.length)];

    fireball.style.background = randomColor;
    fireballInput.value = randomColor;
  });

  window.wizard = wizard;
})();
