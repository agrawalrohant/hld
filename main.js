var filename = "./LRU Cache.js"; // Update the file name to debug here

var scalerModule = require(filename);

let reuslt = scalerModule.LRUCache(4);

let arr = [];
reuslt.set(5, 13);
reuslt.set(9, 6);
reuslt.set(4, 1);
arr.push(reuslt.get(4));
reuslt.set(6, 1);
reuslt.set(8, 11);
arr.push(reuslt.get(13));
arr.push(reuslt.get(1));
reuslt.set(12, 12);
arr.push(reuslt.get(10));
reuslt.set(15, 13);
reuslt.set(2, 13);
reuslt.set(7, 5);
reuslt.set(10, 3);
arr.push(reuslt.get(6));
arr.push(reuslt.get(10));
reuslt.set(15, 14);
reuslt.set(5, 12);
arr.push(reuslt.get(5));
arr.push(reuslt.get(7));
arr.push(reuslt.get(15));
arr.push(reuslt.get(5));
arr.push(reuslt.get(6));
arr.push(reuslt.get(10));
arr.push(reuslt.get(14));
reuslt.set(8, 9);
arr.push(reuslt.get(4));
reuslt.set(6, 11);
arr.push(reuslt.get(9));
reuslt.set(6, 12);
arr.push(reuslt.get(3));

console.log("Result : " + arr);
// from CMD run command "node main" or "node main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
