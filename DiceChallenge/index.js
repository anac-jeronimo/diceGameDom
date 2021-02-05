//change the range, we want from 1 to 6, so we have to had 1.
//otherwise we would get 0 until 5.9999
//this way we get from 1 to 6.

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

//create the ramdomize images

let randomImageSource1 = `Images/dice${randomNumber1}.png`;

//change the src with the randomized image, swaping the src  in the html for the new one.
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//now for the second image, lets make the sintaxe shorter

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = `Images/dice${randomNumber2}.png`;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
console.log("randomNumber1: " + randomNumber1);
console.log("randomNumber2: " + randomNumber2);

//change the title

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a draw! Roll again.";
}
