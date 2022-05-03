// function ascendingOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }
// ascendingOrder([1, 5, 2, 3, 4]);
// // Returns [1, 2, 3, 4, 5]

// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a === b ? 0 : a < b ? 1 : -1;
//   });
// }
// reverseAlpha(['l', 'h', 'z', 'b', 's']);
// // Returns ['z', 's', 'l', 'h', 'b']
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort(function(a,b){
    return a===b ? 0 : a > b ? 1 : -1 
  });
  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
