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
class BinarySearchTree {
  constructor(){
    this.root=null;
  }
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // if(!this.root){
    //   return undefined
    // }
    // return this.root;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // this.root=addNew(this.root,data);
    // function addNew(node,data){
    //   if(!node){
    //     return new Node(data);
    //   }
    //   if(node.data===data){
    //     return node;
    //   }
    //   if(data<node.data){
    //     node.left=addNew(node.left,data);
    //   }
    //   else{
    //     node.right=addNew(node.right,data);
    //   }
    //   return node;
    // }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // return hasData(this.root,data);
    // function hasData(node,data){
    //   if(!node){
    //     return false;
    //   }
    //   if(node.data===data){
    //     return true;
    //   }
    //   if(data < node.data){
    //     return hasData(node.left,data);
    //   }
    //   else{
    //     return hasData(node.right,data);
    //   }
    // }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // return findData(this.root,data);
    // function findData(node,data){
    //   if(!node){
    //     return null;
    //   }
    //   if(node.data===data){
    //     return node;
    //   }
    //   if(data < node.data){
    //     return findData(node.left,data);
    //   }
    //   else{
    //     return findData(node.right,data)
    //   }
    // }


  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  //   this.root=removeNode(this.root,data);
  //   function removeNode(node, data){
  //   if(!node){
  //     return null;
  //   }
  //   if(data<node.data){
  //     node.left=removeNode(node.left,data)
  //     return node;  
  //   } 
  //   else if(data>node.data){
  //     node.right=removeNode(node.right,data);
  //     return node;
  //   }else{
  //     if(!node.left && !node.right){
  //       return null;
  //     }
  //     if(!node.left){
  //       node=node.right;
  //       return node;
  //     }
  //     if(!node.right){
  //       node=node.left;
  //       return node;
  //     }

  //     let minFromRight=node.right;
  //     while(minFromRight.left){
  //       minFromRight=minFromRight.left;
  //     }
  //     node.data=minFromRight.data;
  //     node.right=removeNode(node.right,minFromRight.data);
  //     return node;
  // }
  // }
}
  min() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    // if(!this.root){
    //   return undefined;
    // }
    //   let node=this.root;
    //   while(node.left){
    //     node=node.left;
    //   }
    //   return node.data;
    }

  max() {
  //   // throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  //   if(!this.root){
  //     return undefined;
  //   }
  //   let node=this.root;
  //   while(node.right){
  //     node=node.right;
  //   }
  //   return node.data;
  // }
}}

module.exports = {
  BinarySearchTree
};