function mixedNumbers(arr) {
  // begining
  arr.unshift('I', 2, 'three') 
  //at end
  arr.push(7, 'VIII', 9)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
