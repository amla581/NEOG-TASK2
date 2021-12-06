var readlineSync=require('readline-sync');
var score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(question)  
  if(userAnswer== answer){
    console.log("you are right")
    score+=1
  }
  else{
    console.log("you are wrong");
    score-=1
  }
}
play("What is the capital of india--","Delhi");
play("Where do I live","Dehradun")
console.log("your score is--",score)

