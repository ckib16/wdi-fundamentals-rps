//fizzbuzz with x as the max value to be tested iteratively

var x;
var result;

x = 20

for (var i = 0; i <= x; i += 1) {
if ((i % 3 === 0) && (i % 5 === 0)) {
    result = "fizzbuzz";
} else if (i % 5 === 0) {
    result = "buzz";
} else if (i % 3 === 0)  {
    result = "fizz";
} else {
    result = i;
}
    console.log(result);
}