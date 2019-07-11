const temperature = 27;
const raining = false;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if(!raining){
  console.log("Maybe it's best to leave your umbrella at home");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe it's not a good idea to go outside.");
} else {
  console.log("Now you're ready to go outside!");
}