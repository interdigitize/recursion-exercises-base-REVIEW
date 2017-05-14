const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const arr = flattenTreeToArray(root);
  return _.filter(arr, el => el.id === id)[0];
};

const getElementsByClassName = function(root, className) {
  const arr = flattenTreeToArray(root);
  return _.filter(arr, el => el.className && el.className.indexOf(className) !== -1);
};

const getElementsByTagName = function(root, tagName) {
  const arr = flattenTreeToArray(root);
  return _.filter(arr, el => el.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
