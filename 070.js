function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  } else {
    return "Inside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);