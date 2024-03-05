console.log(
  "Spread operator - The spread operator helps us expand an iterable such as an",
  "array where multiple arguments are needed, it also helps to expand the object expressions."
);
var a = 1;
var b = [2, 3, 4];
var c = [a, b]; // [ 1, [ 2, 3, 4 ] ] // list with in list
var d = [a, ...b]; //  [ 1, 2, 3, 4 ] // 1 d list
console.log(c, d);

console.log(
  "Rest Parameter - The rest parameter is converse to the spread operator.",
  " while the spread operator expands elements of an iterable, the rest operator compresses them.",
  " It collects several elements. In functions when we require to pass arguments",
  " but were not sure how many we have to pass, the rest parameter makes it easier. "
);

function average(...args) {
  console.log(args);
  var avg =
    args.reduce(function (a, b) {
      return a + b;
    }, 0) / args.length;
  return avg;
}
console.log("average of numbers is : " + average(1, 2, 3, 4, 5));
console.log("average of numbers is : " + average(1, 2, 3));
