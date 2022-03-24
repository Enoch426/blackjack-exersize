window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

const cards = [];

const dealer = document.getElementById("dealer-hand");
const player = document.getElementById("player-hand");
const hitButton = document.getElementById("hit-button");
  
  const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King"];
   

  function buildDeck(){

    const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King"];

  for (let rank_index = 0; rank_index < rank.length; rank_index++) {
  
  for (let suit_index = 0 ; suit_index < suit.length; suit_index++) {
 
      cards.push({ Key : rank[rank_index], Value : suit[suit_index] 
      })
      
  }
}
}

document.getElementById('hit-button').addEventListener("click", dealcard,);

function dealcard(){
  cardImage = new Image(100,100);
  cardImage.src = `images/${rank[0]}_of_${suit[0]}.png`;
  // card2 = cardImage + cardImage;
  
  player.append(cardImage);
  dealer.append(cardImage);
  
  
  }


 

})



