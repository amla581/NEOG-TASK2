var readlineSync=require('readline-sync');
var userAge=readlineSync.question("enter the age--");
if (userAge>25){
  console.log("you are right");
}
else{
  console.log("you are wrong")
}
