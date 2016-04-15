function BubbleSort(arr) {
  var sorted = false;
  while(!sorted){
    for(var i = 0; i < arr.length; i++){
      for(var j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
          arr[i] = [arr[j], arr[j] = arr[i]][0];
          sorted = true;
        }
      }//for j
    }//for i
  }//while
  return arr;
}//BubbleSort


function MergeSort(arr){
  if (arr.length < 2){
    return arr;
  }
  var mid = Math.floor(arr.length/2);

  var left = arr.slice(0, mid);
  var right = arr.slice(mid,arr.length);

  var merged = merge(MergeSort(left), MergeSort(right));
  return merged;
}

function merge(left, right){
  var mergedArray = [];

  while(left.length && right.length){
    if(left[0] < right[0]){
      mergedArray.push(left.shift());
    }else
    {
      mergedArray.push(right.shift());
    }//else
  }//while
  return mergedArray.concat(left, right);
}

Array.prototype.QuickSort = function(comparator){

    if (this.length < 2){
      return this;
    }
    if (typeof comparator !== "function"){
      comparator = function(x,y){
        if(x < y){
          return -1;
        }else if (x === y){
          return 0;
        }else{
          return 1;
        }
      };//comparator
    }//if

    var pivot = this[0];
    var left = [];
    var right = [];

    for(var i = 1; i < this.length; i++){
      if (comparator(this[i], pivot) === -1){
        left.push(this[i]);
      }else{
        right.push(this[i]);
      }
    }//for

    return left.QuickSort().concat([pivot]).concat(right.QuickSort());
};
console.log("Merge sorted " + MergeSort([9,8,7,6,5]));
console.log("Bubble sorted " + BubbleSort([9,8,7,6,5]));
console.log("Quick sorted " + [9,8,7,6,5].QuickSort());
