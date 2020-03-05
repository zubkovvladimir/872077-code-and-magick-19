'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_COUNT = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').
  content.querySelector('.setup-similar-item');

  var getRandomName = function () {
    var randomName = (window.utils.getRandomNumber(2)) ? randomName = WIZARD_NAMES : randomName = WIZARD_SURNAME;
    return randomName;
  };

  var getWizardsArray = function (count) {
    var wizardsArray = [];

    for (var i = 0; i < count; i++) {
      var coatColorData = WIZARD_COAT[window.utils.getRandomNumber(WIZARD_COAT.length)];
      var eyesColorData = WIZARD_EYES[window.utils.getRandomNumber(WIZARD_EYES.length)];
      var wizardNamesData = WIZARD_NAMES[window.utils.getRandomNumber(getRandomName().length)] + ' ' + WIZARD_NAMES[window.utils.getRandomNumber(getRandomName().length)];

      var wizards =
        {
          name: wizardNamesData,
          coatColor: coatColorData,
          eyesColor: eyesColorData
        };

      wizardsArray[i] = wizards;
    }

    return wizardsArray;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label')
      .textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat')
      .style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes')
      .style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var appendWizards = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(getWizardsArray(WIZARD_COUNT)[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  appendWizards();
})();
