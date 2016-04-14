// Array.prototype.myFlatten
// Array.prototype.myJoin

Array.prototype.myEach = function(eachFunction) {
  for(var i = 0; i < this.length; i++){
    eachFunction(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(mapFunction){
  var resultArr = [];
  var mappingFunction = function(el){
    resultArr.push(mapFunction(el));
  };

  this.myEach(mappingFunction);
  return resultArr;
};

Array.prototype.myReduce = function(callback){
  var result = this[0];
  this.slice(1).forEach(function(el) {
    result = callback(result, el);
  });
  return result;
};

Array.prototype.mySelect = function(selectingFunction){
  var resultArr = [];
  this.forEach(function(el){
    if (selectingFunction(el) === true){
      resultArr.push(el);
    }
  });
  return resultArr;
};

Array.prototype.myAny = function(conditionalFunction){
  for(var i = 0; i < this.length; i++){
      if(conditionalFunction(this[i]) === true){
        return true;
      }
  }
  return false;
}

Array.prototype.myReverse = function(){
  var reverseArr = [];
  var len = this.length-1;
  for(var i = 0; i <this.length; i++){
    reverseArr[i] = this[len-i];
  }
  return reverseArr;
};
