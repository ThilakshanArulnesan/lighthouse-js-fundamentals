for (let x = 100; x < 201; x++) {
  if (x % 12 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(x);
  }
}