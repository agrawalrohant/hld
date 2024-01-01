var filename = "./Rate Limiter.js"; // Update the file name to debug here

var scalerModule = require(filename);

let reuslt = scalerModule.solve(
  [
    181, 181, 859, 245, 181, 859, 859, 700, 181, 859, 859, 700, 181, 700, 245,
    859, 859, 470, 470, 181, 245, 700, 859, 700, 700, 181, 859, 181, 470, 470,
    859, 700, 859, 181, 245, 470, 245, 470, 700, 859, 181, 470, 470, 700, 470,
    859, 245, 859, 245, 245, 470, 181, 700, 245, 859, 181, 245,
  ],
  [
    2, 4, 5, 5, 6, 8, 10, 12, 12, 14, 15, 17, 18, 18, 20, 20, 21, 21, 21, 21,
    21, 23, 24, 24, 25, 26, 27, 28, 30, 31, 32, 34, 34, 35, 37, 38, 39, 41, 41,
    41, 42, 44, 45, 47, 49, 50, 52, 52, 54, 55, 55, 57, 57, 58, 58, 59, 61,
  ]
);

console.log("Result : " + reuslt);
// from CMD run command "node main" or "node main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
