"use strict";

const account = require("./account");
const prompt = require("prompt-sync")();


    function validatePin(){
       let userInput = prompt("what is your pin?");
        if(parseInt(userInput, 10) === account.pin){
            return true;
        }
        else{
            validatePin();
        } 
    }



    function getBalance(){
        alert("your balance is:" +  account.balance);
    }


    function withdraw(money){  
        
    }

    function deposit(money){

    }

module.exports = {
    validatePin,
    getBalance,
    withdraw,
    deposit
};