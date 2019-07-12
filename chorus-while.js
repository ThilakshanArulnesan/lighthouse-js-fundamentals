const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) { //only triggers on 6TH loop (repeat starts at 0!)
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
