
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node

  // set a variable equal to the children elements and convert the node list to an array
  children = Array.from(node.childNodes);

  // call the callback on the initial node;
  callback(node);

  // iterate through the array and call the callback on each child
  return children.forEach( child => visitAllNodes(child, callback) );
};

const flattenTreeToArray = function(node) {
  var flattenedArr = [];
  var callback = function(child){
    return flattenedArr.push(child)
  }
  visitAllNodes(node, callback);
  return flattenedArr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
