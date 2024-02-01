function reverseArray(list){
  let newList = []
  for(let i = list.length-1; i >= 0; i--){
    newList.push(list[i]);
  }
  return newList;
}
function reverseArrayInPlace(list){
  let temp1 = 0;
  let temp2 = 0;
  let length = list.length;
  for(let i = length-1; i >= Math.floor(length/2); i--){
    temp1 = list[i]
    temp2 = list[length-1-i];
    list[i] = temp2;
    list[length-1-i] = temp1;
  }
  return list;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]