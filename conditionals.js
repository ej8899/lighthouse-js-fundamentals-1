const raining = true;
const temperature = 12;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if(temperature >= 15) {
  console.log("Short sleeves are fine.");
} else {
  console.log("Short sleeves won't cut it!");
}

console.log("Now you're ready to go outside!");