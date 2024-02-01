function range(start, end, step = 1){
  let list = [];
  if (start < end){
  	for(let i = start; i <= end; i += step){
    	list.push(i);
  	}
  }
  else{
    for(let i = start; i >= end; i += step){
    	list.push(i);
  	}
  }
  return list;
}
function sum (list){
  let sum = 0;
  for(let i = 0; i < list.length; i++){
    sum += list[i];
  }
  return sum;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
