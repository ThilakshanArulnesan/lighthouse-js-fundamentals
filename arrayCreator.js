function range(start, end, step) {
  /*The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative*/
  //Edge cases:
  if (start === undefined || end === undefined || step === undefined) return [];
  if (start > end) return [];
  if (step <= 0) return [];
  let x = [];
  for (let i = start; i <= end; i += step) { // go up by stepsize, include last elem.
    x.push(i);
  }
  return x;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));