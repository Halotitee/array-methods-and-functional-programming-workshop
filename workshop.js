function forEach(callback, theArray) {
  for (var i = 0; i < theArray.length; i++ ) {            //full loop  
    callback(theArray[i]);                                //callback from theArray
  }
}

function map(mappingFunction, theArray) {
  var newArray = [];
  
  forEach(function(element) {                     // we pass the element similar to callback (theArray[i]);
    newArray.push(mappingFunction(element))       // as a result, this is what we want to do
  }, theArray);                                   // this is the array we are referencing
  
  return newArray;
}

/* 
function map(mappingFunction, theArray) {
  for (var i = 0; i < theArray.length; i++) {              //pass theArray to mappingFunction
   newArray.push(mappingFunction(theArray[i]))             //push mappingFunction into newArray
  }
  return newArray;                                         //call newArray
}
*/

function filter(predicate, theArray) {
    
}

function every(predicate, theArray) {

}

function some(predicate, theArray) {

}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
