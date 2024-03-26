const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * max - min + 1) + min;
console.log(answer);
let attempts = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`guess the the number between ${min} to  ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("please enter a number bro");
  } else if (guess > max || guess < min) {
    window.alert("please enter a valid for this one");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("too low");
    } else if (guess > answer) {
      window.alert("too high");
    } else {
      window.alert(
        `correct answer  ${answer}   you no of ${attempts} good for you`
      );
      running = false;
    }
  }
}
