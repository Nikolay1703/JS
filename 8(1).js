function reverseArray(arr){
    let array = [];
    array = arr;
    for (let i = array.length - 2; i >= 0; i--)
      array.push(array[i]);
    for (let i = 0; i <= array.length - 2; i++)
      array.shift();
      return array;
  }
  console.log(reverseArray(["A", "B", "C"]));

  /*var arrayValue = [1, 2, 3, 4, 5];
  function reverseArrayInPlace(arrayValue){
  for (let i = 0;  i <= arrayValue.length - 1; i++)
  arrayValue.splice(i, i + 1, arrayValue[4-i]);
  return arrayValue;
  }
  console.log(arrayValue);*/