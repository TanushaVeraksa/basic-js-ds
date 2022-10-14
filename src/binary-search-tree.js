const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.rootTree) {
      this.rootTree = newNode;
      return;
    }
    let currentNode = this.rootTree;
    while(currentNode) {
      if(newNode.data < currentNode.data) {
       if(!currentNode.left) {
        currentNode.left = newNode;
        return;
       }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
         }
          currentNode = currentNode.right;
      }
      
    }
  }

  has(data, node = this.rootTree) {
    if(node === null) {
      return false;
    } else if(data < node.data) {
      return this.has(data, node.left);
    } else if(data > node.data) {
      return this.has(data, node.right);
    } else if(data === node.data) {
      return true;
    }
  }

  find(data, node = this.rootTree) {
    if(node === null) 
      return null;
    else if(data < node.data) 
      return this.find(data, node.left);
    else if(data > node.data) 
      return this.find(data, node.right);
    else  
      return node;
  }

  findMinNode(node) {
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}

remove(data) {
  this.rootTree = this.removeNode(this.rootTree, data);
}
 
removeNode(node, key) {
    if(node === null)
        return null;
 
    else if(key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
    else if(key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
    }
    else {

        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }
 
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }

        let newNode = this.findMinNode(node.right);
        node.data = newNode.data;
 
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
 
}

  min() {
   let currentNode = this.rootTree;
   while(currentNode) {
    currentNode = currentNode.left;
    if(!currentNode.left) {
      return currentNode.data;
    }
   }
  }

  max() {
    let currentNode = this.rootTree;
    while(currentNode) {
     currentNode = currentNode.right;
     if(!currentNode.right) {
       return currentNode.data;
     }
    }
  }
}

module.exports = {
  BinarySearchTree
};