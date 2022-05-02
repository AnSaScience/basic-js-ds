// const { NotImplementedError } = require('../extensions/index.js');

//  const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class NodeStructure{
  constructor(data){
      this.data=data;
      this.left=null;
      this.right=null;
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
                  node.left=addElem(node.left,data);
              }
              else if( data>node.data){
                  node.right=addElem(node.right,data);
              }
              return node;
          }
          this.rootElem=addElem(this.rootElem,data);
      }
    
      has(data) {
      const hasData=(node,data)=>{
          if(!node){
              return false;
          }
          if(node.data===data){
              return true;
          }
          if(node.data>data){
              return hasData(node.left,data)
          }
          if(node.data<data){
             return hasData(node.right,data)
          }
      }
      return hasData(this.rootElem,data)
      }
      find(data) {
          const findData=(node,data)=>{
              if(!node){
                  return null;
              }
              if(node.data===data){
                  return node;
              }
              if(node.data>data){
                  return findData(node.left,data);
              }
              if(node.data<data){
                  return findData(node.right,data);
              }
          }
          return findData(this.rootElem,data);
      }
    
      remove(data) {
        
    }
      min() {
          let iteration=this.rootElem;
          if(!iteration){
              return null;
          }
          while(iteration.left){
              iteration=iteration.left
          }
          return iteration.data
        }
    
      max() {
          let iteration=this.rootElem;
          if(!iteration){
              return null;
          }
          while(iteration.right){
              iteration=iteration.right
          }
          return iteration.data 
    }}
    

module.exports = {
  BinarySearchTree
};