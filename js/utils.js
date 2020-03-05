'use strict';

(function () {
  var getRandomNumber = function (multiplier) {
    return Math.floor(Math.random() * multiplier);
  };

  window.utils = {
    getRandomNumber: getRandomNumber
  };
})();
