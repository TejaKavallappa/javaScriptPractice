/*
a) #uniq
b) twoSum
c) myTranspose
d) stockPicker
*/
function findUnique(value, index, array){
  return (array.indexOf(value) === index);
}

function uniq(arr){
  return arr.filter(findUnique);
}
//Find pairs of elements in the array that sum to 0
function twoSum(arr){
  var resultArr = [];

  arr.forEach(function(value, index){
    var index2 = arr.indexOf(arr[index]*-1);
    if (index2 !== -1 && index2 !== index){
      resultArr.push([index, index2]);
    }//if
  });//forEach

  return resultArr;
}

function myTranspose(arr){

  for(var i = 0; i < arr.length; i++){
    for(var j = 1; j < arr.length; j++){
      arr[i] = [arr[j], arr[j] = arr[i]][0];
    }
  }
  return arr;
}


function stockPicker(arr){
  var minVal = Number.MAX_VALUE;
  var maxProfit = 0;

  for(var i = 0; i < arr.length; i++){
    minVal = Math.min(minVal, arr[i]);
    maxProfit = Math.max(arr[i]-minVal, maxProfit);
  }
  return maxProfit;
}
