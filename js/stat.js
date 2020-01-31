'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var HEADER_X = 150;
var SATURATION_PERCENT = 100;
var GISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElemet = function (arr) {
  var maxElement = arr[0];

  if (arr.length === 0) {
    return 0;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColorElement = function (element) {
  if (element === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'hsl(222,' + Math.round(Math.random() * SATURATION_PERCENT) + '%,50%)';
  }
};

var barHeight = function (gistogramHeight, arr, index) {
  return (gistogramHeight * Math.round(arr[index])) / Math.round(getMaxElemet(arr));
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16 PT mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', HEADER_X, GAP + FONT_GAP);
  ctx.fillText('Список результатов:', HEADER_X, GAP + FONT_GAP + (GAP * 2));

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], HEADER_X + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), HEADER_X + ((BAR_WIDTH + BAR_GAP) * i), (-barHeight(GISTOGRAM_HEIGHT, times, i) + CLOUD_HEIGHT - (GAP * 2) - (FONT_GAP * 2)));
    ctx.fillStyle = getColorElement(names[i]);
    ctx.fillRect(HEADER_X + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, (-barHeight(GISTOGRAM_HEIGHT, times, i)));
  }
};
