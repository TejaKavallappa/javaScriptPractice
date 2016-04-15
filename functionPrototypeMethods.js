// Function.prototype.mycall


Function.prototype.myBind = function(context){
  var fn = this;
  var args = [].slice.call(arguments, 1);

  return function(){
    var bindArgs = [].slice.call(arguments);
    return fn.call(context, args.concat(bindArgs));
  };
};

Function.prototype.inherits = function(Parent) {
  
};
//Test
Cat = function(name){
  this.name = name;
};
Dog = function(name){
  this.name = name;
};
Cat.prototype.sound = function(){
  console.log(this.name + " says meow");
};
Dog.prototype.sound = function(){
  console.log(this.name + " says woof!");
};

var sammy = new Cat("sammy");
var cindy = new Dog("cindy");

sammy.sound.myBind(cindy)();
cindy.sound.myBind(sammy)();
