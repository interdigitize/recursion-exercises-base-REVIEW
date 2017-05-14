
const visitAllNodes = function(node, callback) {
  let children = node.childNodes;
  callback(node);
  return children.forEach(childNode => visitAllNodes(childNode, callback));
};

const flattenTreeToArray = function(node) {
  let result = [];
  visitAllNodes(node, childNode => result.push(childNode));
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
