'use strict';

// var utils = require('lazy-cache')(require);
// var fn = require;
// require = utils;

/**
 * Lazily required module dependencies
 */

// require('debug');
// require('is-registered');
// require('is-valid-instance', 'isValid');
// require = fn;

var utils = {
  debug: require('debug'),
  'is-registered': require('is-registered'),
  isValid: require('is-valid-instance')
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
