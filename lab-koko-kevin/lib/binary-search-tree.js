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

    // if (val < treeNode.value){
    //   if(!treeNode.left) return treeNode.left = new TreeNode(val);
    //   this._insert(val, treeNode.left);
    // } 
    // if (val > treeNode.value){
    //   if(!treeNode.right) return treeNode.right = new TreeNode(val);
    //   this._insert(val, treeNode.right);
    // } 
    
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
    // if (val < treeNode.value) return this._find(val, treeNode.left);
    // if (val > treeNode.value) return this._find(val, treeNode.right);
  }


  remove(val){
    if (!this.root) return null;
    if (this.root.value === val) return this._removeNodeWithTwoChildren(this.root);
    return this._findParent(val, this.root);
  }

  _findParent(val, treeNode){
    if (!treeNode) return null;
    let direction = (val < treeNode.value) ? 'left' :  'right';
    if(treeNode[direction].value !== val) return this._findParent(val, treeNode[direction]);
    return this._remove(val, direction, treeNode);
  }

  _remove(val, direction, parentNode){
    let targetNode = parentNode[direction];
    //no children
    if (!targetNode.left && !targetNode.right) return parentNode[direction] = null;
    //one child
    if (!targetNode.left || !targetNode.right){
      return  parentNode[direction] = targetNode.right ? targetNode.right : targetNode.left;
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

}

module.exports = BinarySearchTree;

