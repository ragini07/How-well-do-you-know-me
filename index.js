
var readlineSync = require('readline-sync');
//var chalk = require('chalk');
const chalk = require('chalk');
var emoji = require('node-emoji');

const correctAns = chalk.green;
const wrongAns = chalk.redBright;


//take user and greet them
var name = readlineSync.question("What's your name?");
console.log(chalk.yellow('Hello', chalk.bold.bgMagentaBright(name)));

//start quiz
console.log(chalk.bold.underline.yellowBright("Lets check how well you know me")+emoji.get('🙎‍♀️'));  
var ready = readlineSync.question("Are You Ready to play!!!",
  {
  trueValue: ['yes', 'yeah', 'yep','y'],
  falseValue: ['no', 'nah', 'nope','n']
}
);
if(ready === true){
  //array of listed questions
  const quiz = [
    {
      question:"Where do I live?",
      answer:"JAMSHEDPUR"
    },
      {
      question:"What's my favourite food?",
      answer:"CAKE"
    },
      {
      question:"Whats my Zodiac sign?",
      answer:"LIBRA"
    },
      {
      question:"Whats my favourite movie?",
      answer:"MONEY HEIST" 
    },
      {
      question:"What is my eye color?",
      answer:"BLACK"
    }
  ];
  //List of high scores
  const highScore = [
    {
      name: "Disha",
      score: 5
    },
    {
      name: "Dipti",
      score:4
    }
  ]
  var score = 0;
  //Quiz function
  function playQuiz(question,answer){
      var userAns = readlineSync.question(chalk.cyanBright(question));
      if(userAns.toUpperCase() === answer)
      {
        console.log(correctAns("Hurry!!That's Correct"));
        score++;
        
      }
      
      else
        console.log(wrongAns("Oops!!Wrong answer"));

      console.log("Current score "+score);

   
  
  }
  
   for(var i=0;i<quiz.length;i++)
      playQuiz(quiz[i].question,quiz[i].answer);

  console.log("Your Final Score is "+score);
  var flag = 0;
  highScore.map(user =>{
    if(score>=user.score)
     flag=1;
  });
  if(flag==1)
  {
    console.log(chalk.bold.yellowBright("Yay!!! Congratulations!You have scored a HIGH SCORE ")+emoji.get('sparkles'));
    console.log("Please share a screenshot of your score & I'll update the scoreboard");

  }
  console.log(chalk.cyanBright("Thankyou "+name+" "+"for participating")+emoji.get('😊'));

  
}
else
console.log(chalk.cyanBright("Thankyou "+name+" ")+emoji.get('😊'));
