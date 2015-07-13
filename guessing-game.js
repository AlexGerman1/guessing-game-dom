var guess,
    second_question,
    answer,
    message;

guess = prompt("I have been to 32 different States in the Country. How many have I lived in?");
console.log("The user guessed " + guess);

answer = 2;

while (guess !== answer) {
  if ( guess === 1 || (guess >= 3 && guess <= 5) ) {
   guess = prompt("close, try again");
 } else if ( guess >= 6 && guess <= 10 ) {
   guess = prompt("lower");
 } else if ( guess >= 11 && guess <= 20 ) {
   guess = prompt("even lower");
 } else if ( guess >= 21 && guess <= 32 ) {
   guess = prompt("are you not getting the hint, it rhymes with shoe");
 } else if ( guess > 32) {
   guess = prompt("try following the dirrections");
 } else if ( guess == answer ) {
   message = "Alright! You got it right!";
   break;
 }
};

var el = document.getElementById('firstanswer');
el.innerHTML = message

second_question = prompt("Well, how many states have you lived in?");
console.log("The user guessed " + second_question);

if ( second_question == 2 ) {
   message = "Me too";
 } else if ( second_question == 1 || ( second_question >= 3 && second_question <= 5 ) ) {
   message = "It could be worse";
 } else if ( second_question >= 6 && second_question <= 10 ) {
   message = "army brat";
 } else if ( second_question >= 11 && second_question <= 20 ) {
   message = "outlaws?";
 } else if ( second_question >= 21 && second_question <= 32 ) {
   message = "what was high school like."
 } else {
   message = "try following the dirrections"
 }

var el = document.getElementById('secondanswer');
el.innerHTML = message
alert(message);
var el = document.getElementById('welcome');
el.innerHTML = '<font size="10" color="blue">"Welcome to my guessing game!"</font>'
