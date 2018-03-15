'use strict';

class TreeNode {
  constructor(value=null,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


class BinaryTree{
  constructor(root){
    this.root = root || new TreeNode();
  }

  inOrderTraversal(){ // 0(n)
    if(!this.root) return null;
    this.orderedValues = []; 
    this._inOrderTraversal(this.root);
    return this.orderedValues;
  }
 
  _inOrderTraversal(treeNode){
    if (!treeNode) return null;
    this._inOrderTraversal(treeNode.left);
    this.orderedValues.push(treeNode.value);
    this._inOrderTraversal(treeNode.right);
  }

  preOrderTraversal(){ // 0(n)
    if(!this.root) return null;
    this.preOrderedValues = [];
    this._preOrderTraversal(this.root);
    return  this.preOrderedValues;
  }
 
  _preOrderTraversal(treeNode){
    if (!treeNode) return null;
    this.preOrderedValues.push(treeNode.value);
    this._preOrderTraversal(treeNode.left);
    this._preOrderTraversal(treeNode.right);
  }

  postOrderTraversal(){ // 0(n)
    if(!this.root) return null;
    this.postOrderValues = [];
    this._postOrderTraversal(this.root);
    return this.postOrderValues;
  }
 
  _postOrderTraversal(treeNode){
    if (!treeNode) return null;
    this._postOrderTraversal(treeNode.left);
    this._postOrderTraversal(treeNode.right);
    this.postOrderValues.push(treeNode.value);
  }


} 

module.exports = BinaryTree;