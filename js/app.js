'use strict';

let correctAnswers = 0;

// Q1 Yes or No
let name = prompt('Welcome to the pre quiz about Jovincent Del Mundo(Joe)! Whats your name?')
let military = prompt(`Hello ${name}! Here is the first question to a total of FIVE yes or no questions. Did Joe serve in the United States Coast Guard?`)
  if(military.toLowerCase() === 'no' || military.toLowerCase() === 'n'){
    alert('That is correct!')
    correctAnswers++;
    // console.log('That is correct!')
  }else if(military.toLowerCase() === 'yes' || military.toLowerCase() === 'y'){
    alert('Sorry, that is incorrect. Joe served in the Air Force!')
  }else if(military === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }
// Q2 Yes or No
  let origin = prompt('Was Joe born in the Philippines?')
  if(origin.toLowerCase() === 'no' || origin.toLowerCase() === 'n'){
    alert('That is correct!')
    correctAnswers++;
    // console.log('That is correct!')
  }else if(origin.toLowerCase() === 'yes' || origin.toLowerCase() === 'y'){
    alert('Sorry, that is incorrect. Joe was born in California!')
  }else if(origin === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }
// Q3 Yes or No
  let age = prompt('Is Joe 30 years old?')
  if(age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
    alert('That is correct!')
    correctAnswers++;
    // console.log('That is correct!')
  }else if(age.toLowerCase() === 'no' || age.toLowerCase() === 'n'){
    alert('Sorry, that is incorrect. He actually is 30 years old.')
  }else if(age === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }
// Q4 Yes or No
  let degree = prompt('Does Joe have a degree in rocket science?')
  if(degree.toLowerCase() === 'no' || degree.toLowerCase() === 'n'){
    alert('That is correct!')
    correctAnswers++;
    // console.log('That is correct!')
  }else if(degree.toLowerCase() === 'yes' || degree.toLowerCase() === 'y'){
    alert('Sorry, that is incorrect... but I do not blame you for thinking so. He is a genius after all')
  }else if(degree === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }
// Q5 Yes or No
  let station = prompt(`Okay, last one ${name}! Was Joe ever stationed in Alaska?`)
  if(station.toLowerCase() === 'yes' || station.toLowerCase() === 'y'){
    alert('That is correct!')
    correctAnswers++;
    // console.log('That is correct!')
  }else if(station.toLowerCase() === 'no' || station.toLowerCase() === 'n'){
    alert('Sorry, that is incorrect. He indeed was stationed in Alaska for 4 years.')
  }else if(station === ' '){


    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }
// Q6 Numeric
  //Random number generator 
  let answer = Math.floor(Math.random() * 10 +1);
  let guess = prompt('Guess a number between 1 and 10');
  let numOfGuesses = 0;
  while (guess !== answer && numOfGuesses < 5) {
    let remainingGuesses = 5 - numOfGuesses
    if (guess > answer) {
      guess = prompt(`Too high. Guess a number between 1 and 10. You have ${remainingGuesses} guesses left`);
      numOfGuesses++;
    } else if (guess < answer) {
      guess = prompt(`Too low. Guess a number between 1 and 10. You have ${remainingGuesses} guesses left`);
      numOfGuesses++;
    }else{
      alert(`Correct! The answer is ${answer}`)
      correctAnswers++;
      break;
    }
  }
//Q7
  let favDino = ['tyrannosaurus rex', 'pterodactyl', 'triceratops', 'velociraptor', 'spinosaurus','stegosaurus'] 
let dinoPrompt = prompt('What is my favorite dinosaur?')
let rightDino = true;
let guessesLeft = 0;

while(rightDino && guessesLeft < 6){
  let currentGuess = 6 - guessesLeft
  for(let i = 0; i < favDino.length; i++){
    let currentDino = favDino[i]
    if(currentDino === dinoPrompt.toLowerCase()){
      alert('Correct! One of many.')
      correctAnswers++;
      rightDino = false;
    }
  }
  if(rightDino){
      guessesLeft++;
      dinoPrompt = prompt(`Incorrect. Try again. You have ${currentGuess} guesses left.`)
    }
  }

alert(`You got ${correctAnswers} out of 7.`)
// alert(`The correct answer was ${answer}. Try again.`);

  // const answer = Math.floor(Math.random() * 10) +1;
  
  // console.log(answer);
  
  // let guess = prompt('Guess a number between 1 and 10');
  
  // for(let i = 0; i < 4; i++){
  //   let guessAmount = 3
  //   let guessLeft = guessAmount - i
  //   if(guess === answer){
  //     alert('correct')
  //   }else if(guess < answer){
  //     guess = prompt(`Too low. Guess a number between 1 and 10. ${guessLeft} guesses left.`);
  //   }else if(guess > answer){
  //     guess = prompt(`Too high. Guess a number between 1 and 10. ${guessLeft} guesses left.`);
  //   }
  //   if(guessAmount === 0){
  //     alert(`The answer is ${answer}.`)
  //   }
  // }



// for(let i = 0; i < 5; i++){
//   let guessAmount2 = 5;
//   let guessLeft2 = guessAmount2 - i;
//   let dino = favDino[i];
//   if(dinoPrompt === dino){
//     alert('You got it! One of many.')
//     correctAnswers++;
//     break;
//   }else{
//     prompt(`That is a cool one, but not one of mine. You have ${guessLeft2} guesses left.`)
//   }
// };


  


  






