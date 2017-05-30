const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  //flatten the tree
  var flattenedTreeArr = flattenTreeToArray(root);
  //iterate through the tree and check if the element id matches the desired id. Return the first.
  return _.filter(flattenedTreeArr, el => el.id === id)[0];
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
