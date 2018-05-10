module.exports = function createCanvas (width, height)
{
  var canvas;
  if (typeof document !== 'undefined') {
    canvas = document.createElement('canvas');
  } else {
    try {
      var Canvas = require('canvas').Canvas;
      canvas = new Canvas(width, height);
    } catch (e) {
      console.log(e);
    }
  }
  return canvas;
};
