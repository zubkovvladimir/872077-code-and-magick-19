'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').
  content.querySelector('.setup-similar-item');
  var form = document.querySelector('.setup-wizard-form');
  var setup = document.querySelector('.setup');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
      .textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat')
      .style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes')
      .style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var saveHandler = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
  };

  form.addEventListener('submit', saveHandler);

})();
