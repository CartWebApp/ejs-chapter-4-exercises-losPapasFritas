function arrayToList(array){
  if(array.length > 0){
  	return {value: array[0],
  				rest: arrayToList(array.slice(1))}
  }
  else{
    return null;
  }
}
function listToArray(list){
  let array = []
  for (let node = list; node; node = node.rest) {
  	array.push(node.value);
  }
  return array
}
function prepend(first, remainder){
  return {value: first,
  				rest: remainder}
}
function nth(list, index){
  for (let node = list; node; node = node.rest) {
    if (index === 0){
  		return node.value
    }
    index--;
  }
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
