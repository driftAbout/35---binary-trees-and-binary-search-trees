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

  insert(val){
    if (!this.root) return this.root = new TreeNode(val);
    return this._insert(val, this.root);
  }

  _insert(val, treeNode){
    if (val === treeNode.value) return null;
    let direction = val < treeNode.value ? 'left' :  'right';
    if(!treeNode[direction]) return treeNode[direction] = new TreeNode(val);
    this._insert(val, treeNode[direction]);    
  }

  find(val){
    if (!this.root) return null;
    return this._find(val, this.root);
  }

  _find(val, treeNode){
    if(!treeNode) return null;
    if (val === treeNode.value) return treeNode.value;
    let direction = val < treeNode.value ? 'left' :  'right';
    return this._find(val, treeNode[direction]);
  }

  remove(val){
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
    if (!targetNode.left && !targetNode.right) {
      if(!parentNode) return this.root = null;
      return parentNode[direction] = null;
    }

    //one child
    if (!targetNode.left || !targetNode.right){
      if(!parentNode) return this.root =  targetNode.right ? targetNode.right : targetNode.left;
      return  parentNode[direction]  = targetNode.right ? targetNode.right : targetNode.left;
    }

    //two children
    return this._removeNodeWithTwoChildren(targetNode);
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

  isBalanced(){
    if (!this.root) return true;
    this.rightHeight = 0;
    this.leftHeight = 0;
    this.balanced = true;
    this._isBalanced(this.root);
    return this.balanced;
  }

  _isBalanced(treeNode){
    if (!treeNode) return;
    this._isBalanced(treeNode.left);
    this._isBalanced(treeNode.right);
    if(!this.balanced) return;
    if(treeNode.right) this.rightHeight++;
    if (treeNode.left) this.leftHeight++;
    if ((Math.abs(this.rightHeight - this.leftHeight)) > 1) return  this.balanced = false;
  }

}

module.exports = BinarySearchTree;

