function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  let m = arr.length;

  for(let i =0;i<m;i++){
    let count = 0;
    for(let k = 0;k<arr[i].length;k++){
      let d = arr[i][k];
      if (d==elem){
        count +=1;
      }
    }
    if (count<1){
      newArr.push([...arr[i]])
    }
  }


  // Only change code above this line
  return newArr;
}

// Second option
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) == -1) {
//       //Checks every parameter for the element and if is NOT there continues the code
//       newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
//     }
//   }

//   // change code above this line
//   return newArr;
// }

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
