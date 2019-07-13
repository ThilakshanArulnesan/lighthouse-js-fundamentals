const isOdd  = function (num) {
  return num % 2 === 1;
}

const tenIsOdd = isOdd(10);
const elOddIsOdd = isOdd(11);

console.log(tenIsOdd);
console.log(elOddIsOdd);

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));