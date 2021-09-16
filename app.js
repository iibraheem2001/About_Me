let ownHouse = prompt('Do you think I own a house?');
if (ownHouse == 'yes'){
    
    alert('wrong, I dont own a house!');
}else{
    alert('you are correct, I dont own a house.')
}


let breakFast = prompt('Did I have breakfast today?');
if (breakFast == 'yes'){

    alert('You are right, I did have breakfast.')
}else{
    alert('you are wrong');

}


let ownCar = prompt('Do I own a car?');
if (ownCar == 'yes'){

    alert('you are right, I do own a car!')
}else{

    alert('Wrong, I do own a car');
}

let sellHouses = prompt('Do I sell houses?');
if (sellHouses == 'yes'){
    
    alert('you are right, I do sell houses!')
}else{
    
    alert('Wrong, its my job to sell houses');
}

let howOld = prompt('am I 20 years old?');
if (howOld == 'yes'){
    
    alert('you are right, I turned 20 this month!')
}else{
    
    alert('Wrong, I just turned 20 this month');
}
let userAnswer = parseInt(prompt("Guess a number between 1 and 20"));
let correctAnswer = 11
let numberOfAttempts = 4;
for(let i = 1; i <= numberOfAttempts; i++){
    if(userAnswer > correctAnswer){
       userAnswer = parseInt(prompt("Answer is too high, try again"))

    } else if(userAnswer < correctAnswer){
      userAnswer = parseInt(prompt("Answer is too low, try again"))

    } else if(userAnswer == correctAnswer){
        alert("You got the right number!");
        break
    }
}
