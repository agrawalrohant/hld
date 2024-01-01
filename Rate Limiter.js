// Question -> https://www.scaler.com/academy/mentee-dashboard/class/116015/assignment/problems/39590?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let resultArr = [];

    let currMap = new Map(); // clientId : requestTimeStamp Array
    let prevMap = new Map(); // clientId : requestTimeStamp Array

    let currentWindowEnd = 10;

    for (let i = 0; i < A.length; i++) {
      let currClient = A[i];
      let currTime = B[i];

      while (currTime <= currentWindowEnd) {
        let success = isAllowed(currClient, currTime);
        resultArr.push(success);
        if (success) {
          updateRequestEntry(currClient, currTime);
        }
        i++;
        currClient = A[i];
        currTime = B[i];
      }
      i--;
      currentWindowEnd += 10;
      prevMap = currMap;
      currMap = new Map();
    }
    return resultArr;

    function isAllowed(clientId, timeStamp) {
      let currentCount = getCurrentCount(clientId);
      let preCount = 0;
      if (timeStamp % 10 > 0) {
        preCount = getPraportionaltePreviousCount(clientId, timeStamp % 10);
      }
      if (currentCount + preCount >= 3) {
        return 0;
      }
      return 1;
    }

    function getCurrentCount(clientId) {
      if (currMap.has(clientId)) {
        return currMap.get(clientId).length;
      }
      return 0;
    }

    function getPraportionaltePreviousCount(clientId, praportion) {
      if (prevMap.has(clientId)) {
        let arr = prevMap.get(clientId);
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > praportion) {
            count++;
          }
        }
        return count;
      }
      return 0;
    }

    function updateRequestEntry(clientId, currTime) {
      if (currMap.has(clientId)) {
        let arr = currMap.get(clientId);
        arr.push(currTime % 10 == 0 ? 10 : currTime % 10);
        currMap.set(clientId, arr);
      } else {
        currMap.set(clientId, [currTime % 10 == 0 ? 10 : currTime % 10]);
      }
    }
  },
};
