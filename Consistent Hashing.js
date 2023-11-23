module.exports = {
  //param A : array of strings
  //param B : array of strings
  //param C : array of integers
  //return a array of integers
  solve: function (A, B, C) {
    let serverLocations = [];
    let ans = [];

    for (let i = 0; i < A.length; i++) {
      if (A[i] == "ADD") {
        ans.push(add(B[i], userHash(B[i], C[i])));
      } else if (A[i] == "ASSIGN") {
        ans.push(assign(B[i], userHash(B[i], C[i])));
      } else {
        //REMOVE
        ans.push(remove(B[i]));
      }
    }

    function add(serverName, location) {
      let serverToInsert = new CHServer(serverName, location);
      if (serverLocations.length == 0) {
        serverLocations.push(serverToInsert);
        return 0;
      } else {
        return insertIntoSortedArrayAndMove(serverLocations, serverToInsert);
      }
    }

    function remove(serverName) {
      let removeIndex = serverLocations.findIndex((item) => {
        return item.serverName == serverName;
      });
      let reassignedIndexCount = 0;
      reassignedIndexCount = serverLocations[removeIndex].requestHandled.length;
      if (removeIndex + 1 < serverLocations.length) {
        serverLocations[removeIndex + 1].requestHandled = serverLocations[
          removeIndex + 1
        ].requestHandled.concat(serverLocations[removeIndex].requestHandled);
        serverLocations[removeIndex + 1].requestHandled.sort((a, b) => {
          return a.location - b.location;
        });
      } else {
        serverLocations[0].requestHandled =
          serverLocations[0].requestHandled.concat(
            serverLocations[removeIndex].requestHandled
          );
        serverLocations[0].requestHandled.sort((a, b) => {
          return a.location - b.location;
        });
      }

      serverLocations.splice(removeIndex, 1);
      return reassignedIndexCount;
    }

    function assign(requestName, location) {
      let requestToInsert = new Request(requestName, location);
      let index = findIndexToInsert(serverLocations, requestToInsert);
      if (index >= serverLocations.length) {
        index = 0;
      }
      if (serverLocations[index].requestHandled.length == 0) {
        serverLocations[index].requestHandled.push(requestToInsert);
      } else {
        insertIntoSortedArray(
          serverLocations[index].requestHandled,
          requestToInsert
        );
      }
      if (index >= serverLocations.length) {
        index = 0;
      }
      return serverLocations[index].location;
    }

    function userHash(username, hashKey) {
      const p = hashKey;
      const n = 360;
      let hashCode = 0;
      let p_pow = 1;
      for (let i = 0; i < username.length; i++) {
        let character = username[i];
        hashCode =
          (hashCode +
            (character.charCodeAt(0) - "A".charCodeAt(0) + 1) * p_pow) %
          n;
        p_pow = (p_pow * p) % n;
      }
      return hashCode;
    }

    function insertIntoSortedArray(serverLocations, serverToInsert) {
      let index = findIndexToInsert(serverLocations, serverToInsert);
      serverLocations.splice(index, 0, serverToInsert);
    }

    function insertIntoSortedArrayAndMove(serverLocations, serverToInsert) {
      let index = findIndexToInsert(serverLocations, serverToInsert);
      let requestModedCount = 0;
      if (index == serverLocations.length) {
        if (serverLocations[0].requestHandled.length > 0) {
          let arrUpdatedOld = [];
          let arrNew = [];
          for (let i = 0; i < serverLocations[0].requestHandled.length; i++) {
            if (
              serverLocations[0].requestHandled[i].location >
                serverToInsert.location ||
              serverLocations[0].requestHandled[i].location <
                serverLocations[0].location
            ) {
              arrUpdatedOld.push(serverLocations[0].requestHandled[i]);
            } else {
              arrNew.push(serverLocations[0].requestHandled[i]);
            }
          }
          serverToInsert.requestHandled = arrNew;
          requestModedCount = arrNew.length;
          serverLocations[0].requestHandled = arrUpdatedOld;
        }
      } else if (index == 0) {
        if (serverLocations[0].requestHandled.length > 0) {
          let arrUpdatedOld = [];
          let arrNew = [];
          for (let i = 0; i < serverLocations[0].requestHandled.length; i++) {
            if (
              serverLocations[0].requestHandled[i].location >
                serverToInsert.location &&
              serverLocations[0].requestHandled[i].location <
                serverLocations[0].location
            ) {
              arrUpdatedOld.push(serverLocations[0].requestHandled[i]);
            } else {
              arrNew.push(serverLocations[0].requestHandled[i]);
            }
          }
          serverToInsert.requestHandled = arrNew;
          requestModedCount = arrNew.length;
          serverLocations[0].requestHandled = arrUpdatedOld;
        }
      } else {
        if (serverLocations[index].requestHandled.length > 0) {
          let partitionIndex = findIndexToInsert(
            serverLocations[index].requestHandled,
            serverToInsert
          );
          serverToInsert.requestHandled.concat(
            serverLocations[index].requestHandled.slice(0, partitionIndex)
          );
          serverLocations[index].requestHandled.splice(0, partitionIndex);
          requestModedCount = partitionIndex;
        }
      }
      serverLocations.splice(index, 0, serverToInsert);
      return requestModedCount;
    }

    function findIndexToInsert(serverLocations, serverToInsert) {
      let indexAnswer;
      let start = 0;
      let end = serverLocations.length - 1;
      let mid;
      while (start <= end) {
        mid = parseInt((start + end) / 2);
        if (serverToInsert.location == serverLocations[mid].location) {
          return mid;
        } else if (serverToInsert.location > serverLocations[mid].location) {
          start = mid + 1;
          indexAnswer = start;
        } else {
          end = mid - 1;
          indexAnswer = mid;
        }
      }
      return indexAnswer;
    }

    return ans;
  },
};

class CHServer {
  constructor(serverName, location) {
    this.serverName = serverName;
    this.location = location;
    this.requestHandled = [];
  }
}

class Request {
  constructor(serverName, location) {
    this.serverName = serverName;
    this.location = location;
  }
}
