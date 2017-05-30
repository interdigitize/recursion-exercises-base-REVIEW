
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node

  // set a variable equal to the children elements and convert the node list to an array
  children = Array.from(node.childNodes);

  // call the callback on the initial node;
  callback(node);

  // iterate through the array and call the callback on each child
  return children.forEach(function(node){
    callback(node);
  });

};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};


// var test = [
//   something: {
//     name: 'thing',
//     color: 'neutral',
//     type: 'generic',
//     numbers: [1, 5, 3],
//     aChild: {
//       name: 'thing',
//       color: 'neutral',
//       type: 'generic',
//       expression: 'cool'
//     }
//   },
//   another: {
//     name: 'anada',
//     color: 'blue',
//     type: 'interesting',
//     numbers: [2, 3],
//     aChild: {
//       name: 'twoBit',
//       color: 'seafoam',
//       type: 'interesting',
//       expression: 'sick'
//     }
//   }
// ];
//
// visitAllNodes()
