'use strict';

let name = prompt('Welcome to the pre quiz about Jovincent Del Mundo(Joe)! Whats your name?')
let military = prompt(`Hello ${name}! Here is the first question to a total of FIVE yes or no questions. Did Joe serve in the United States Coast Guard?`)

  if(military.toLowerCase() === 'no' || military.toLowerCase() === 'n'){
    alert('That is correct!')
    // console.log('That is correct!')
  }else if(military.toLowerCase() === 'yes' || military.toLowerCase() === 'y'){
    alert('Sorry, that is incorrect. Joe served in the Air Force!')
  }else if(military === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }

  let origin = prompt('Was Joe born in the Philippines?')

  if(origin.toLowerCase() === 'no' || origin.toLowerCase() === 'n'){
    alert('That is correct!')
    // console.log('That is correct!')
  }else if(origin.toLowerCase() === 'yes' || origin.toLowerCase() === 'y'){
    alert('Sorry, that is incorrect. Joe was born in California!')
  }else if(origin === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }

  let age = prompt('Is Joe 30 years old?')

  if(age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
    alert('That is correct!')
    // console.log('That is correct!')
  }else if(age.toLowerCase() === 'no' || age.toLowerCase() === 'n'){
    alert('Sorry, that is incorrect. He actually is 30 years old.')
  }else if(age === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }

  let degree = prompt('Does Joe have a degree in rocket science?')

  if(degree.toLowerCase() === 'no' || degree.toLowerCase() === 'n'){
    alert('That is correct!')
    // console.log('That is correct!')
  }else if(degree.toLowerCase() === 'yes' || degree.toLowerCase() === 'y'){
    alert('Sorry, that is incorrect... but I do not blame you for thinking so. He is a genius after all')
  }else if(degree === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }

  let station = prompt(`Okay, last one ${name}! Was Joe ever stationed in Alaska?`)

  if(station.toLowerCase() === 'yes' || station.toLowerCase() === 'y'){
    alert('That is correct!')
    // console.log('That is correct!')
  }else if(station.toLowerCase() === 'no' || station.toLowerCase() === 'n'){
    alert('Sorry, that is incorrect. He indeed was stationed in Alaska for 4 years.')
  }else if(station === ' '){
    alert('are you even trying?')
  } else {
    alert('Welp... that is something alright... not really much of anything but it is something.')
  }