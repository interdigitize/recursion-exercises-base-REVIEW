
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
  // create an array variable to add children to
  var flattenedArr = [];
  // set a function that adds a child element to the array above
  var callback = function(child){
    return flattenedArr.push(child)
  }
  // pass flattenTreeToArray root node and callback to the visitAllNodes function
  visitAllNodes(node, callback);
  // return the array
  return flattenedArr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
