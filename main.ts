#! /usr/bin/env node
import inquirer from "inquirer"
let todos = []//Shopper []
let condition = true

while(condition)
{
   let todoQuestions = await inquirer.prompt(
    [
    {
    name:"firstQuestion",
    type:"input",
    message:"What would you like to add in you todos?"
    },
    {
     name:'secondQuestion',
     type:"confirm",//When type is confirm answer is in yes or no
     message:'Would you like to add more in your todos?',
     default:"true"
     }
]
);
todos.push(todoQuestions.firstQuestion);
console.log(todos)
//The loop is running on the based of this variabe condition
condition = todoQuestions.secondQuestion;
}
//READ, UPDATE , delete , Add