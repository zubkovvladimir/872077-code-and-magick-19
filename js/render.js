'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').
  content.querySelector('.setup-similar-item');

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
      .textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat')
      .style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes')
      .style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizard = function (data) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(createWizard(data[i]));
    }

    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    wizard: renderWizard
  };
})();
