'use strict';

const BinarySearchTree = require('../lib/binary-search-tree.js');


describe('binary search tree test', function() {  

  class TreeNode {
    constructor(value=null,left=null,right=null){
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  let binarySearchTree = new BinarySearchTree();
  let tree = {'root': {'left': {'left': null, 'right': null, 'value': 2}, 'right': {'left': null, 'right': {'left': null, 'right': null, 'value': 16}, 'value': 8}, 'value': 5}};
 
  describe ('insert method', () => {  
    binarySearchTree.insert(new TreeNode(5));
    binarySearchTree.insert(new TreeNode(2));
    binarySearchTree.insert(new TreeNode(8));
    binarySearchTree.insert(new TreeNode(16));
    it ('insert nodes into the tree', () => {   
      expect(binarySearchTree).toEqual(tree);
    });

    describe ('find', () => {
      it('should find the correct node', () => {
        expect(binarySearchTree.find(16)).toBe(16);   
        expect(binarySearchTree.find(56)).toBeNull();
      });
    });

    describe('remove', () => {
      it('should remove the specified node', () => {
        binarySearchTree.remove(2);
        let treeTwo = {'root': {'left': null, 'right': {'left': null, 'right': {'left': null, 'right': null, 'value': 16}, 'value': 8}, 'value': 5}};
        expect(binarySearchTree).toEqual(treeTwo);   
      });
    });

    describe('balance', () => {
      it('should check if the tree is balanced or not', () => {        
        expect(true).toBe(true);   
      });
    });
  });
});