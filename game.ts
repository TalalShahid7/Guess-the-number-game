#! /usr/bin/env node
import inquirer from "inquirer";

let exe; 

const randomnum = Math.floor(Math.random() * 10 + 1);

do {
    const guessnum = await inquirer.prompt([
        {
            type: "input",
            name: "gnum",
            message: "Input your guessed num",
        },
    ]);
    console.log("Your num is", guessnum.gnum);

    if (parseInt(guessnum.gnum) === randomnum) {
        console.log("You guessed the num");
    } else {
        console.log("Not guessed");
    }

    let sectry = await inquirer.prompt([
        {
            name: "stry",
            type: "list",
            message: "Try again?",
            choices: ["yes", "No"],
        },
    ]);
    // (sectry.stry==='yes')?exe=true:exe=false;
     if(sectry.stry==='yes'){
        exe=true;
     }
     else{
        exe=false;
     }
} while (exe);
