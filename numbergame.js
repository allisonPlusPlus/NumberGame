function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(1,10)

var choice = prompt("Please pick a number", "Put your number here");

if(choice > getRandomInt) {
    console.log("too high");
}
else if(choice < getRandomInt) {
    console.log("too low");
}
else {
    console.log("Just right!!");
}