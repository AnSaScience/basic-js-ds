// const { NotImplementedError } = require('../extensions/index.js');

//  const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class NodeStructure{
  constructor(data){
      this.data=data;
      this.leftElem=null;
      this.rightElem=null;
  }
  }
  class BinarySearchTree {
      constructor(){
        this.rootElem=null;
      }
      root(){
      return this.rootElem;  
      }
    
      add(data) {
          const addElem=(node,data)=>{
              if(node===null){
                  node=new NodeStructure(data);
              }
              if(node.data===data){
                  return node;
              }
              if(data<node.data){
                  node.leftElem=addElem(node.leftElem,data);
              }
              else if( data>node.data){
                  node.rightElem=addElem(node.rightElem,data);
              }
              return node;
          }
          this.rootElem=addElem(this.rootElem,data);
      }
    }
module.exports = {
  BinarySearchTree
};