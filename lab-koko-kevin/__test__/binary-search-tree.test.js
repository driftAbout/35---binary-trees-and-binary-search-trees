'use strict';

const  BinarySearchTree = require('../lib/binary-search-tree.js');

describe('binary search tree test', function() {

  let binarySearchTree = new BinarySearchTree();

  [11, 16, 3, 23, 12, 8, 6, 9, 7, 5, 2, 1].forEach(val => binarySearchTree.insert(val));

  console.log(JSON.stringify(binarySearchTree));

  //[5, 9, 39].forEach(val => console.log('look up:', val, ', found:', binarySearchTree.find(val)));

  binarySearchTree.remove(11);

  console.log('After remove', JSON.stringify(binarySearchTree));
 
  it('Should be true', () => {
    expect(true).toBe(true);
  });

});