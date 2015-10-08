function sayHello(name) {
    return "Hello, " + name;
}

sayHello("Chris");
///
function areBothEven(a, b) {
  if (a === b) {
    return true;
  }
  else {
    return false;
  }
}

areBothEven(1,1);
///
function hotOrNot(temp) {
  if (temp > 75) {
    return "Hot!";
  }
  else {
    return "Not hot!";
  }
}

hotOrNot(74);
///

function threeIfNull(num) {
  if (num === null) {
    return 3;
  }
  else {
    return num;
  }
}

threeIfNull(null);
///
/// NOT WORKING ///
function greatest(x, y, z) {
  var array = [x, y, z];
  var sorted = array.sort;
  return sorted[sorted.length-1];
}

greatest(9,3,7);
