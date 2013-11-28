
/**
 * Make a function callable once.
 * @param {Function} fn
 * @api public
 */

module.exports = function once(fn) {
  var done = false;
  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  };
};