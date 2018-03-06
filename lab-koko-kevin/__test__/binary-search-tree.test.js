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

});