const gameContainer = document.getElementById("game");
const div = document.getElementsByClassName('newDiv');
const divs = document.querySelector('#game div')

let arr = [];
let noMatch = [];


let clicks = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");


    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);

  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  const selectedCard = event.target;
  // let selectedCard = div.cardColor;

  selectedCard.style.backgroundColor = selectedCard.className
  console.log("you just clicked", selectedCard.className);

  //match 2 cards
  // arr.push(selectedCard.className);
  // console.log(arr)
  // if(arr[0] === arr[1]){
  //   console.log('match');

  arr.push({cardColor: selectedCard.className, target: event.target});  
  console.log(arr);
  //limit 2 clicks
  clicks++;
  console.log(clicks)

  if(clicks % 2 === 0){
    if(arr[0].cardColor !== arr[1].cardColor){
      console.log(arr)
      setTimeout( function () {
        arr[0].target.style.background = 'none';
        arr[1].target.style.background = 'none';
        arr = [];
        
        }, 1000);
        
    }
    else{
      arr = [];
    }
    }
   
  

    
    // setTimeout( function (){
    
    // div.style.backgroundColor = 'white';
    // alert('reset card colors')

    // }, 500)

}





// when the DOM loads
createDivsForColors(shuffledColors);


//show collection of cards

//face down

//if match than remain facing up 