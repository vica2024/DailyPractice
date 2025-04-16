// How to make it establish as below ? 
// but don't motify the original one.

Object.prototype[Symbol.iterator] = function(){
    var arr = Object.values(this);
    return arr[Symbol.iterator]();
}

var [a,b] = {
    a:1,
    b:2
}

console.log(a,b);

