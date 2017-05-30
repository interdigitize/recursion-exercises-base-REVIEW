#When you want to visit all nodes:

- set a var equal to children
- call the callback on the initial node
- iterate through the children and call the papa function on each child
- return the iteration

#When you see 'flatten' think:
- set an array variable to return
- set a callback function that does some desired something
- pass the papa root node and callback to a visitAllNodes function
- return the array