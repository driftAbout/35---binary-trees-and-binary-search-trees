'use strict';

const  BinaryTree = require('../lib/binary-tree.js');

class TreeNode {
  constructor(value=null,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe('binary tree test', function() {
  let one = new TreeNode(1);
  let two = new TreeNode(2);
  let three = new TreeNode(3);
  let four = new TreeNode(4);
  let five = new TreeNode(5);
  let six = new TreeNode(6);
  let seven = new TreeNode(7);
  let eight = new TreeNode(8);
  let nine = new TreeNode(9);

  let binaryTree = new BinaryTree();
  binaryTree.root = one;

  one.left = two;
  one.right = three;
  two.right = six;

  three.left = four;
  three.right = five;

  six.right = eight;

  eight.left = seven;
  seven.right = nine;

  describe('In Order Traveral', () => {
    it('Should be true', () => {
      expect(JSON.stringify(binaryTree.inOrderTraversal())).toEqual('[2,6,7,9,8,1,4,3,5]');
    });
  });
  describe('Pre Order Traveral', () => {
    it('Should be true', () => {
      expect(JSON.stringify(binaryTree.preOrderTraversal())).toEqual('[1,2,6,8,7,9,3,4,5]');
    });
  });
  describe('Post Order Traveral', () => {
    it('Should be true', () => {
      expect(JSON.stringify(binaryTree.preOrderTraversal())).toEqual('[1,2,6,8,7,9,3,4,5]');
    });
  });
});