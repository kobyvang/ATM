"use strict";

const account = require("./account");
const prompt = require("prompt-sync")();


    function validatePin(){
       let userInput = prompt("what is your pin?");
        if(parseInt(userInput  === account.pin)){
            return true;
        }
        else{
            validatePin();
        } 
    }


    function getBalance(){
        console.log(account.balance);
       return account.balance;
    }

    function withdraw(takeMoney){ 
        account.balance = account.balance - takeMoney;
    
    
    }

    function deposit(giveMoney){
        account.balance = account.balance + giveMoney;

    }

deposit(300);
withdraw(200);
getBalance(); 

    function done(){
        let leave = confirm("you have completed your transaction");
        if (leave){
            window.close();
        }else{
            atm();
        }
    }






