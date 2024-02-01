function deepEqual(itemA, itemB){
  let itemAProp = Object.keys(itemA);
  let itemBProp = Object.keys(itemB);
  //console.log(itemA[itemAProp[0]]);
  if (itemBProp.length != itemAProp.length){
    return false;
  }
  for(let i = 0; i < itemAProp.length; i++){
    if (itemBProp.indexOf(itemAProp[i]) === -1){
      return false;
    }
  }
  for(let i = 0; i < itemBProp.length; i++){
    if (itemAProp.indexOf(itemBProp[i]) === -1){
      return false;
    }
  }
  for(let i = 0; i < itemAProp.length; i++){
    let tempObj1 = 0;
    let tempObj2 = 0;
    //console.log(typeof itemA[itemAProp[i]])
    if (typeof itemA[itemAProp[i]] == "object" && itemA[itemAProp[i]] != null && typeof itemB[itemBProp[itemBProp.indexOf(itemAProp[i])]] == "object" && itemB[itemBProp[itemBProp.indexOf(itemAProp[i])]] != null){
      tempObj1 = itemA[itemAProp[i]];
      tempObj2 = itemB[itemBProp[itemBProp.indexOf(itemAProp[i])]];
      if(deepEqual(tempObj1,tempObj2) === false){
        return false;
      }
    }
    else if(typeof itemA[itemAProp[i]] != typeof itemB[itemBProp[itemBProp.indexOf(itemAProp[i])]]){
    	return false;
    }
    else if(typeof itemA[itemAProp[i]] != "object"){
      if(itemA[itemAProp[i]] != itemB[itemBProp[itemBProp.indexOf(itemAProp[i])]]){
        return false;
      }
    }
  }
  return true;
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
