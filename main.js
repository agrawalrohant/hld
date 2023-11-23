var filename = "./Consistent Hashing.js"; // Update the file name to debug here

var scalerModule = require(filename);

/*let reuslt = scalerModule.solve(
  ["ADD", "ASSIGN", "ADD", "ASSIGN", "REMOVE", "ASSIGN"],
  ["INDIA", "NWFJ", "RUSSIA", "OYVL", "INDIA", "IGAX"],
  [7, 3, 5, 13, -1, 17]
);*/

/*let reuslt = scalerModule.solve(
  ["ADD", "ASSIGN", "ASSIGN", "ADD", "ASSIGN", "ASSIGN", "REMOVE", "ASSIGN"],
  ["INDIA", "IRYA", "RGJK", "RUSSIA", "BGVH", "SUKJ", "INDIA", "RBRF"],
  [11, 31, 7, 3, 5, 13, -1, 17]
);*/
/*let reuslt = scalerModule.solve(
  ["ADD", "ASSIGN", "ASSIGN", "ADD", "ASSIGN", "ASSIGN", "REMOVE", "ASSIGN"],
  ["INDIA", "GSZJ", "ORWX", "RUSSIA", "IENS", "TTXU", "INDIA", "CHEX"],
  [211, 181, 919, 383, 571, 127, -1, 97]
);*/

let reuslt = scalerModule.solve(
  [
    "ADD",
    "ASSIGN",
    "ASSIGN",
    "ASSIGN",
    "ADD",
    "ASSIGN",
    "ASSIGN",
    "ASSIGN",
    "ADD",
    "ASSIGN",
    "ASSIGN",
    "ASSIGN",
    "ADD",
    "ASSIGN",
    "ASSIGN",
    "ASSIGN",
    "REMOVE",
    "ASSIGN",
    "ASSIGN",
    "ASSIGN",
    "REMOVE",
    "ASSIGN",
    "ASSIGN",
    "ASSIGN",
    "REMOVE",
    "ASSIGN",
    "ASSIGN",
  ],
  [
    "INDIA",
    "XXWK",
    "HLFK",
    "XPUZ",
    "RUSSIA",
    "HYSP",
    "AYMS",
    "NZYJ",
    "CHINA",
    "MCVT",
    "SZXJ",
    "RPXJ",
    "GERMANY",
    "XXYV",
    "NECG",
    "MTAI",
    "INDIA",
    "UAQR",
    "PUZE",
    "LISG",
    "RUSSIA",
    "ZMYR",
    "NAKS",
    "RVDV",
    "CHINA",
    "EZUH",
    "OWCR",
  ],
  [
    211, 181, 919, 383, 571, 127, 977, 97, 271, 127, 751, 79, 89, 571, 641, 743,
    -1, 53, 419, 727, -1, 757, 191, 823, -1, 337, 827,
  ]
);

console.log("Result : " + reuslt);
// from CMD run command "node main" or "node main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
