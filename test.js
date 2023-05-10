// test임
let arr = [1, 2, 3, 4]; 

let sum = arr.reduce((total, currentValue) => { 
  return total + currentValue; 
}, 100);

let sum_one = arr.reduce((total, currentValue) => total + currentValue, 100);

gridObj.$V('EVI_SEQ',rowIndex);