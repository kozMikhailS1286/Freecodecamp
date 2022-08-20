function randomRange(myMin, myMax) {
  // Only change code below this line
  if (myMin < myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  return 0;
  // Only change code above this line
}