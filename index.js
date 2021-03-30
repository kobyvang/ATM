"use strict";

const prompt = require("prompt-sync")();
const atm = require("./atm");


 function menu(){
    let options = (prompt)("select a choice 1.balance, 2.deposit, 3.withdrawl, 4.done");
    if (options === 1){
         atm.getBalance();
    } else if(options === 2){
        atm.deposit();
    } else if(options ===3){
        atm.withdraw();
    }else (options === 4);{
        atm.done();
   }
}
console.log(menu());


validatePin();
getBalance();
withdraw();
deposit();