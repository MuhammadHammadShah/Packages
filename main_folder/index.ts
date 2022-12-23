#! /usr/bin/ env node

import inquirer from "inquirer";
import chalk from "chalk";
import animation from "chalk-animation";
import showBanner from "node-banner";
let score = 0;
let play = true;
(async () => {
  await showBanner("Guessing Game", "Guess to win", "green");
})();
// animation.rainbow("Guessing Game");
// animation.neon("Guess correct to win");
async function guessingNumber() {
  while (play) {
    let randomNumber = Math.ceil(Math.random() * 2 + 1);

    let answer = await inquirer.prompt([
      {
        name: "userNumber",
        type: "number",
        message: "Enter any Number from 1 to 10",
      },
    ]);
    if (answer.userNumber === randomNumber) {
      console.log(chalk.green("you choose a right number"));
      score += 10;
      console.log(chalk.blue(`Your score is now ${score}`));
    } else {
      console.log(chalk.red("try again !!"));
      score -= 10;
      console.log(`your score is now ${score}`);
      console.log("The right Number is  >>>>>>  ", randomNumber);
      play = false;
    }
  }
}

setTimeout(() => {
  guessingNumber();
}, 1000);
