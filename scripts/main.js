window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
const dealer = document.getElementById("dealer-hand");
const player = document.getElementById("player-hand");
const hitButton = document.getElementById("hit-button");
// let cardImage = `images/${rank}_of_${suit}.png`;
  
  const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King"];
   

  function buildDeck(){

    let suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King"];

  for (let rank_index = 0; rank_index < 13; rank_index++) {
  
  for (let suit_index = 0 ; suit_index < 4; suit_index++) {
 
  let newCard = { Key : rank[rank_index], Value : suit[suit_index] };
  
      console.log(newCard)
  }
}
}

buildDeck();


})