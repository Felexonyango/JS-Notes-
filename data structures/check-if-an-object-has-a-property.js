let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// function isEveryoneHere(obj) {
//   if (
//     obj.hasOwnProperty("Alan") &&
//     obj.hasOwnProperty("Jeff") &&
//     obj.hasOwnProperty("Sarah") &&
//     obj.hasOwnProperty("Ryan")
//   ) {
//     return true;
//   }
//   return false;
// }

// or

function isEveryoneHere(obj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    obj.hasOwnProperty(name)
  );
}

console.log(isEveryoneHere(users));
