const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(){
    this.base = null;
  }

  root() {
   return this.base;
  }

  add(data) {
    const newNode = new Node(data)
    if(!this.base){
      this.base = newNode;
      return;
    }
    let currentNode = this.base;
    while(currentNode){
      if(newNode.data < currentNode.data){
        if(!currentNode.left){
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left
      }
      else{
        if(!currentNode.right){
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data) {
    return searchFunction(this.base, data)
    function searchFunction(node, data){
      if(!node){
        return false;
      }
      else if (node.data === data){
        return true;
      }
      else if (data < node.data){
        return searchFunction(node.left, data)
      }
      else{
        return searchFunction(node.right, data)
      }
    }
    
  }

  find(data) {
    return searchFunction(this.base, data)
    function searchFunction (node, data){
      if(node === null){
        return null;
      }
      else if (node.data === data){
        return node
      }
      else if (data < node.data){
        return searchFunction (node.left, data)
      }
      else if (data > node.data){
        return searchFunction (node.right, data)
      }
    }
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }

  min() {
   return searchFunction(this.base)
   function searchFunction(node){
    if(node.left === null){
      return node.data;
    }else{
      return searchFunction(node.left)
    }
   }
  }

  max() {
   return searchFunction(this.base);
   function searchFunction(node){
     if (node.right === null){
       return node.data
     }else{
       return searchFunction(node.right)
     }
   }
  }
}