#! /usr/bin/env node
import inquirer from "inquirer";

console.log("WELCOME TO YOUR PERSONAL ATM");
let myBalance = 10000; // Dollar
let myPin = 1234;

 {
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select operation",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"]
            }
        ]);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]);

            if (amountAns.amount > myBalance) {
                console.log("Insufficient Amount");
            } else {
                myBalance -= amountAns.amount;
                console.log("Withdrawn!! Your Remaining Balance is: $" + myBalance);
            }
        } else if (operationAns.operation === "check balance") {
            console.log("Your Current Balance is: $" + myBalance);
        } else if (operationAns.operation === "fast cash") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Choose your amount",
                    type: "list",
                    choices: [1000, 3000, 5000, 10000]
                }
            ]);

            myBalance -= amountAns.amount;
            console.log("Fast cash!! Your Remaining Balance is: $" + myBalance);
        }
    } else {
        console.log("Incorrect pin number");
    }
};
