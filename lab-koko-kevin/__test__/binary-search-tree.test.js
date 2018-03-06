'use strict';

const  BinarySearchTree = require('../lib/binary-search-tree.js');

describe('binary search tree test', function() {

  let binarySearchTree = new BinarySearchTree();

  //[11, 16, 3, 23, 12, 8, 6, 9, 7, 5, 2, 1].forEach(val => binarySearchTree.insert(val));

  //[11,  3, 8, 6, 9, 7, 5, 2, 1].forEach(val => binarySearchTree.insert(val));
  //binarySearchTree.insert(11);

  [2, 3, 1, 4, 7].forEach(val => binarySearchTree.insert(val));
  console.log(JSON.stringify(binarySearchTree));

  console.log('isBalanced', binarySearchTree.isBalanced());

  //[5, 9, 39].forEach(val => console.log('look up:', val, ', found:', binarySearchTree.find(val)));
  //binarySearchTree.remove(8);
  //binarySearchTree.remove(2);
  //binarySearchTree.remove(1);
  //binarySearchTree.remove(11);

  //console.log('After remove', JSON.stringify(binarySearchTree));
 
  it('Should be true', () => {
    expect(true).toBe(true);
  });

  describe('Valid input ', () => {
    beforeAll(() => {
      this.balancedTree = new BinarySearchTree();
      //[11, 16, 3, 23, 12, 8, 6, 9, 7, 5, 2, 1].forEach(val => this.balancedTree.insert(val));
      [2,3,1].forEach(val => this.balancedTree.insert(val));
      
      this.unBalancedTree = new BinarySearchTree();
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19].forEach(val => this.unBalancedTree.insert(val));
    });

    it('Should return true for a balanced tree', () => {
      expect(this.balancedTree.isBalanced()).toBe(true);
    });

    it('Should return false for a unbalanced tree', () => {
      expect(this.unBalancedTree.isBalanced()).toBe(false);
    });

    it('Should return true for tree with not branches', () => {
      let tree = new BinarySearchTree();
      tree.insert(3);
      expect(tree.isBalanced()).toBe(true);
    });
  });

});