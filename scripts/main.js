window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
const player = document.getElementById("dealer-hand");
const dealer = document.getElementById("player-hand");
const hitButton = document.getElementById("hit-button");
// let cardImage = `images/${rank}_of_${suit}.png`;
  
  const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King"];
   

    
      for (let suits_index = 0; suits_index < 4; suits_index++) {
      //console.log(suits[suits_index])
      for (let index = 0 ; index < 13; index++) {
      //console.log(ranks[index])
      let newCard = { Key : rank[index], Value : suit[suits_index] };
          cardDeck.push(newCard);
      }
    }



