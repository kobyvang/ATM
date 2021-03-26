"use strict";


const atm = require("./atm");


function atm(){
    let options = parseInt(prompt)("select a choice 1.balance, 2.deposit, 3.withdrawl, 4.done");
    if (options === 1){
         atm.getBalance();
    } else if(choice === 2){
        atm.deposit();
    } else if(choice ===3){
        atm.withdraw();
    }else (choice === 4);{
        atm.done();
    }
}