var readLineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readLineSync.question(chalk.blue("Please Enter Your Name : "))

console.log("Welcome ",userName);

var userDOB = readLineSync.question(chalk.green.underline("Enter you date of birth in DD/MM format "));

var number="";

function validateDate(userDOB){
  if(validateDateFormat(userDOB) && validateDateRange(userDOB)){
    return true;
  }else{
    return false;
  }
}

function validateDateFormat(userDOB){
  var userDD = userDOB.substring(0,2);
  var userMM = userDOB.substring(3,5);
  number = parseInt(userDD) + parseInt(userMM);
  if(isNaN(userDD) || isNaN(userMM) || isNaN(number)){
    return false;
  }
  return true;
}

function validateDateRange(userDOB){
  var userDD = userDOB.substring(0,2);
  var userMM = userDOB.substring(3,5);
  
  if(userDD>31 || userMM>12){
    console.log(chalk.bold.red(userDD, " is not a valid birthday"));
    return false;
  }else if(userDD>29 && userMM==2){
    console.log(chalk.bold.red(userDD, " is not a valid birthday"));
    return false;
  }else if((userMM===4 || userMM===6 || userMM===9 || userMM===11) && (userDD>30)){
    console.log(chalk.bold.red(userDD, " is not a valid birthday"));
    return false;
  }
  return true;
}


function checkPrime(number){
  console.log(number);
  if(number>3){
    for(var i=2;i<number;i++){
      if(number%i==0){
        return false;
      }
    }
  }

return true;
}

if(validateDate(userDOB)==true){
  if(checkPrime(number)){
        console.log(chalk.bold.cyan("\nYour DOB is s PRIME NUMBER!! Share this on your social media! "));
    }
    else {
        console.log(chalk.bold.magenta("\nYour DOB is NOT a prime number"));
    }
}

