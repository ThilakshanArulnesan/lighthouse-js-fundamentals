/*(function merge(arr1,arr2){
  // create empty arr
  let retArr = [];
  let c1 = 0;
  let c2 =0;
  // loop through first array using while loop
  while(c1<arr1.length && c2 < arr2.length){
    if(arr1[c1]<arr2[c2]) { //first array element is smaller
      retArr.push(arr1[])
    }
  }
  // 
}
*/

function merge(arr1, arr2) { //recursive solution

  //base cases:
  if (arr1.length === 0)
    return arr2;
  if (arr2.length === 0)
    return arr1;

  if (arr1[0] <= arr2[0]) {
     //If the first entry of arr1 is smaller, add that to the front of the array
     //along with the merge of the remainder of the arr1 with arr2
    return [arr1[0]].concat(merge(arr1.splice(1, arr1.length - 1), arr2));
  } else {
    //same logic as previous merge, but switching arr1 with arr2. Note the order of calling
    //the arguments is not relevant as merge is symmetric(?)
    return [arr2[0]].concat(merge(arr2.splice(1, arr2.length - 1), arr1));
  }
}
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);