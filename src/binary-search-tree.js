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
      return this.find(data)?true:false;
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
          const removeElem=(node,data)=>{
              if(!node){
                  return null;
              }
              if(node.data <data){
                 node.right=removeElem(node.right,data);
                  return node;
              }
              if(node.data>data){
                  node.left=removeElem(node.left,data);
                  return node;  
              }else{
                  if(!node.left && !node.right){
                      return null;
                  }
                  if(!node.left){
                      node=node.right;
                      return node;
                  }
                  if(!node.right){
                      node=node.left;
                      return node;
                  }
                  let maxFromLeft=node.left;
                  while(maxFromLeft.right){
                      maxFromLeft=maxFromLeft.right;
                  }
                  node.data=maxFromLeft.data;
                  node.right=removeElem(node.right,maxFromLeft.data);
                  return node;
              }


          }
          this.rootElem=removeElem(this.rootElem,data);    
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