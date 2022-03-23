// Business Logic
function boopBeep(number) {
  console.log("The number entered is: ");
  // for (let i = 0; i <= number; i++) {
  //   console.log("Number: " + number);
  // }
  // let result = number / 3;
  // console.log("Number divided by 3 is: " + result);
  // if (result - Math.floor(result) !== 0) {
  //   console.log("Number is not divisible by 3.");
  // } else {
  //   console.log("Number is divisible by 3.");
  // }
  numberToArray = number.toString().split("");
  console.log("Number in array form: " + numberToArray);
  // Check for a zero.
  for (let i = 0; i < numberToArray.length; i++) {
    if (numberToArray[i] === "1") {
      console.log("One found at position: " + i);
    }
    if (numberToArray[i] === "0") {
      console.log("Zero found at position: " + i);
    }
  }
}

// User Interface Logic
