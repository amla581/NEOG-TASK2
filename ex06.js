var readlineSync=require('readline-sync');
var userAge=readlineSync.question("enter the age--");
score=0
if (userAge>25){
  console.log("you are right");
  score=score+1;
}
else{
  console.log("you are wrong");
  score=score-1
}
