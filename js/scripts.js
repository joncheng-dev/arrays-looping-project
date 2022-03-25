// Business Logic
function boopBeep(number) {
  const resultToHtml = [];
  // The number given by the user is how high to count to.
  // Start at zero, then count up until the target number.
  // Each counting number will be sent to the below code.
  let countingNumber = 0;
  for (let i = 0; i <= number; i++) {
    const numberToArray = countingNumber.toString().split("");
    // Delving into this specific number in the set of numbers..
    let divByThree = false;
    let hasZero = false;
    let hasOne = false;
    // Loop through the digits present in the current number.
    // Check if divisible by 3.
    for (let j = 0; j < numberToArray.length; j++) {
      let result = countingNumber / 3;
      if (result - Math.floor(result) === 0 && numberToArray[j] != 0) {
        divByThree = true;
        break;
      }
    }
    // Check for a "0" digit anywhere in the number.
    for (let k = 0; k < numberToArray.length; k++) {
      if (numberToArray[k] === "0") {
        hasZero = true;
        break;
      }
    }
    // Check for a "1" digit anywhere in the number.
    for (let l = 0; l < numberToArray.length; l++) {
      if (numberToArray[l] === "1") {
        hasOne = true;
        break;
      }
    }
    // Only one condition must be true. Here's the order of precedence.
    if (divByThree === true) {
      console.log("I'm sorry, Dave. I'm afraid I can't do that.");
      resultToHtml.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (hasZero === true) {
      console.log("Beep!");
      resultToHtml.push("Beep!");
    } else if (hasOne === true) {
      console.log("Boop!");
      resultToHtml.push("Boop!");
    } else {
      console.log(countingNumber);
      resultToHtml.push(countingNumber);
    }
    // Once the loop goes through, move up one count.
    countingNumber++;
  }
  return resultToHtml;
}

// User Interface Logic
$(document).ready(function () {
  $("#userEnter").submit(function (event) {
    event.preventDefault();
    // Save user's number entered from form.
    const userNumber = $("input#number").val();
    const printToScreen = boopBeep(userNumber);
    // Pushes to html page
    for (let i = 0; i < printToScreen.length; i++) {
      $(".translated").append("<li>" + printToScreen[i] + "</li>");
    }
  });
});
