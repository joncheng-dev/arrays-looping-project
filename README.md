# _Boop Beep_

#### By _**Jonathan Cheng**_

#### _A web app that takes a number from a user and prints output to the HTML page._

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _JavaScript_
- _JQuery_

## Description

_This browser application that takes a user entered number and returns phrases, strings, or numbers depending on what was entered._

## Setup/Installation Requirements

- _Clone this repository to your desktop._
- _Navigate to the top level of your directory._
- _Open arrays-looping-project/boop-beep.html in your browser_

## Known Bugs

- _Avoid entering very large numbers. Page may become unresponsive._
- _Negative numbers also do not work._
- _Refresh html page after each submission / result._

## License

Copyright (c) _2022_ _Jonathan Cheng_

## Testing Details

Describe: boopBeep()

Test: "It will take a number and console log the number."
Code: boopBeep(5);
Expected Output: 5;

Test: "It will take a number, and console log all numbers, starting with 0 one at a time incrementing by one each time, until it reaches the number."
Code: boopBeep(5);
Expected Output: 0 1 2 3 4 5; --> with new line after each

Test: "It will take a number, determine if the number is divisible by 3, return true if it is, and return false if it is not."
Code: boopBeep(36);
Expected Output: true;

Test: "It will take a number, determine if the number includes a '0', return true if it does, and return false if it does not."
Code: boopBeep(30);
Expected Output: true;

Test: "It will take a number, determine if the number includes a '1', return true if it does, and return false if it does not."
Code: boopBeep(11);
Expected Output: true;

Test: "It will take a number, loop through all digits, and display to the screen if there is a zero or a one, and at which index position it was found."
Code: boopBeep(210);
Expected Output: 1 at index 1, 0 at index 2;

Test: "It will take a number, and depending on whether it includes a digit 1, 0, or is divisible by 3, will print to the screen a different result."
Code: boopBeep(1);
Expected Output: "Boop!";

Test: "It will take a number, and print out only one result for that specific number -- either includes a 1, includes a 0, divisible by 3, or none of the above."
Code: boopBeep(10);
Expected Output: "Beep!";
