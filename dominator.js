const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  //flatten the tree
  var flattenedTreeArr = flattenTreeToArray(root);
  //iterate through the tree and check if the element id matches the desired id. Return the first.
  return _.filter(flattenedTreeArr, el => el.id === id)[0];
};

const getElementsByClassName = function(root, className) {
  //flatten the tree
  var flattenedTreeArr = flattenTreeToArray(root);
  // iterate through the tree
  return _.filter(flattenedTreeArr, el => {
    //check if an element className matches the desired className
    if(el.className && el.className.indexOf(className) !== -1) {
      return el;
    };
  });
};

const getElementsByTagName = function(root, tagName) {
  // flatten the tree
  var flattenedTreeArr = flattenTreeToArray(root);
  // iterate through the tree
  return _.filter(flattenedTreeArr, el => {
    //check if an element tagName matches the desired tagName
    if(el.tagName === tagName){
      //return the element
      return el;
    }
  });
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
