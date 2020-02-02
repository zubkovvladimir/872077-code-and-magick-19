'use strict';

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').
content
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getWizardsArray = function () {
  var WizardsArray = [];

  var getWizardData = function (arr) {
    return arr[Math.floor(Math.random() * Math.floor(arr.length))];
  };

  var getRandomName = function () {
    var random = Math.floor(Math.random() * Math.floor(2));
    var randomName = (random) ? randomName = WIZARD_NAMES : randomName = WIZARD_SURNAME;
    return randomName;
  };

  for (var i = 0; i <= 3; i++) {
    var wizards =
      {
        name: getWizardData(getRandomName()) + ' ' + getWizardData(getRandomName()),
        coatColor: getWizardData(WIZARD_COAT),
        eyesColor: getWizardData(WIZARD_EYES)
      };
    WizardsArray[i] = wizards;
  }

  return WizardsArray;
};

var arrayWizards = getWizardsArray();

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

  for (var i = 0; i <= arrayWizards.length - 1; i++) {
    fragment.appendChild(renderWizard(arrayWizards[i]));
  }
  similarListElement.appendChild(fragment);
};

appendWizards();

document.querySelector('.setup-similar').classList.remove('hidden');
