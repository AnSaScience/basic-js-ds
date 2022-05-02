// const { NotImplementedError } = require('../extensions/index.js');

//  const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}

module.exports = {
  BinarySearchTree
};