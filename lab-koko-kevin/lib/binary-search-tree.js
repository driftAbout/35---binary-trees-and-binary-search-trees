'use strict';

class TreeNode {
  constructor(value=null,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree{
  constructor(root){
    this.root = root || null;
  }

  insert(nodeToInsert){  // O(logn)
    if(!this.root) 
      this.root = nodeToInsert;
    else
      this._insert(this.root, nodeToInsert); 
  }
  _insert(root, nodeToInsert){
    if(nodeToInsert.value < root.value){
      //going left
      if(!root.left)
        root.left = nodeToInsert;
      else
        this._insert(root.left, nodeToInsert);
    } else {
      //going right
      if(!root.right)
        root.right = nodeToInsert;
      else
        this._insert(root.right, nodeToInsert);
    }
  }

  find(val){ // O(logn)
    if (!this.root) return null;
    return this._find(val, this.root);
  }

  _find(val, treeNode){
    if(!treeNode) return null;
    if (val === treeNode.value) return treeNode.value;
    let direction = val < treeNode.value ? 'left' :  'right';
    return this._find(val, treeNode[direction]);
  }

  remove(val){ //O(logn)
    if (!this.root) return null;
    //remove root
    if (this.root.value === val) return this._remove(val, null, null);
    return this._findParent(val, this.root);
  }

  _findParent(val, treeNode){
    if (!treeNode) return null;
    let direction = (val < treeNode.value) ? 'left' :  'right';
    if(treeNode[direction].value !== val) return this._findParent(val, treeNode[direction]);
    return this._remove(val, direction, treeNode);
  }

  _remove(val, direction, parentNode){

    let targetNode = parentNode ? parentNode[direction] : this.root;

    //no childern
    if (!targetNode.left && !targetNode.right) { //O(1)
      if(!parentNode) return this.root = null;
      return parentNode[direction] = null;
    }

    //one child
    if (!targetNode.left || !targetNode.right){ //O(1)
      if(!parentNode) return this.root =  targetNode.right ? targetNode.right : targetNode.left;
      return  parentNode[direction]  = targetNode.right ? targetNode.right : targetNode.left;
    }

    //two children
    return this._removeNodeWithTwoChildren(targetNode); //0(n) n being length of children
  }

  _removeNodeWithTwoChildren(treeNode){
    let swapNodeParent =  this._nodeWithLargestValue(treeNode.left);
    treeNode.value = swapNodeParent.right.value;
    swapNodeParent.right = swapNodeParent.right.left;
  }

  _nodeWithLargestValue(treeNode){
    if(treeNode.right){
      if(!treeNode.right.right) return treeNode;
    }
    return this._nodeWithLargestValue(treeNode.right);
  }

  isBalanced(){ // 0(n)
    return this._isBalanced(this.root); 
  }
  _height(treeNode) {
    if (!treeNode) return 0;
    return 1 + Math.max(this._height(treeNode.left), this._height(treeNode.right));
  }
  _isBalanced(root) {
    if (!root) return true;
    let leftHeight = this._height(root.left);
    let rightHeight = this._height(root.right);
    if (Math.abs(leftHeight - rightHeight) <= 1
        && this._isBalanced(root.left)
        && this._isBalanced(root.right)) 
      return true;
    return false;
  }
}


module.exports = BinarySearchTree;

