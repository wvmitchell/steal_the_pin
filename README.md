# Stealing the Pin

## Description

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐  
│&nbsp;1&nbsp;│&nbsp;2&nbsp;│&nbsp;3&nbsp;│  
├───┼───┼───┤  
│ 4 │ 5 │ 6 │  
├───┼───┼───┤  
│ 7 │ 8 │ 9 │  
└───┼───┼───┘  
    │ 0 │  
    └───┘  
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!

(Credit Codewars for this problem)

## Examples

* With input "8" => ["5", "7", "8", "9", "0"],
* With input "11" => ["11", "22", "44", "12", "21", "14", "41", "24", "42"]

## Using the tests

Some example tests have already been created for you. You only need make them
pass. You can get started by running the following commands:

1) Clone the repo: `git clone git@github.com:wvmitchell/steal_the_pin.git`
2) Move in and install dependencies: `cd steal_the_pin && npm i`
3) Run the tests: `npm test`
4) Alternatively, run the tests in watch mode: `npm run test:watch`
5) Make the first test pass, then move on to the first skipped test

## Important notes
1) Other than unskipping tests, you do not need to alter the test file.

## Submitting your solution
* Open up a pull request to this repo using a forked copy of the repo to your
  own Github account. Once you've done that, drop a message in the #frontend
  channel linking us to your PR.
