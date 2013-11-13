var ease = require('ease');
var offset = require('offset');

function ScrollTo(options) {
  var options = options || {};
  var el = document.querySelector(options.el);
  var duration = options.duration || 2000;
  var easing = options.easing ? ease[options.easing] : ease['linear'];
  var scrollOffset = options.offset || 0;

  var stop = false;
  var start = Date.now();
  var html = document.getElementsByTagName('html')[0];
  var fromY = document.body.scrollTop || html.scrollTop;
  var toY = fromY + offset(el).top + scrollOffset;

  var updatePosition = function(){
    var now = Date.now();
    if (now - start >= duration) stop = true;
    var p = (now - start) / duration;
    var tick = Math.round(fromY + (toY - fromY) * easing(p));
    document.body.scrollTop = tick;
    html.scrollTop = tick;
    setTimeout(function() {
      if(stop) return;
      updatePosition();
    }, 10);
  };

  updatePosition();
}

module.exports = ScrollTo;
