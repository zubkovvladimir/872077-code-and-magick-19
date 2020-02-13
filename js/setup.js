'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COUNT = 4;
var ENTER_KEY = 'Enter';
var ESCAPE_KEY = 'Escape';

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').
content
.querySelector('.setup-similar-item');
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
  addRandomColor(wizardCoat, wizardCoatInput, WIZARD_COAT);
});

wizardEyes.addEventListener('click', function () {
  addRandomColor(wizardEyes, wizardEyesInput, WIZARD_EYES);
});

fireball.addEventListener('click', function () {
  addRandomColor(fireball, fireballInput, WIZARD_FIREBALL);
});

var getRandomNumber = function (multiplier) {
  return Math.floor(Math.random() * multiplier);
};

var addRandomColor = function (wizardElement, wizardElementInput, colorArr) {
  var randomColor = colorArr[getRandomNumber(colorArr.length)];

  if (wizardElement === fireball) {
    wizardElement.style.background = randomColor;
  } else {
    wizardElement.style.fill = randomColor;
  }

  wizardElementInput.value = randomColor;
};

var getRandomName = function () {
  var randomName = (getRandomNumber(2)) ? randomName = WIZARD_NAMES : randomName = WIZARD_SURNAME;
  return randomName;
};

var getWizardsArray = function (count) {
  var wizardsArray = [];

  for (var i = 0; i < count; i++) {
    var coatColorData = WIZARD_COAT[getRandomNumber(WIZARD_COAT.length)];
    var eyesColorData = WIZARD_EYES[getRandomNumber(WIZARD_EYES.length)];
    var wizardNamesData = WIZARD_NAMES[getRandomNumber(getRandomName().length)] + ' ' + WIZARD_NAMES[getRandomNumber(getRandomName().length)];

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
};

appendWizards();

document.querySelector('.setup-similar').classList.remove('hidden');
