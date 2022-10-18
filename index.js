// Code your solutions in this fil
 let cards =['Will','mike','cole'];
function writeCards(cards, event ='surprise'){
 let sentCards = [];
  for (let i = 0; i < cards.length; i++){
  sentCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
}

return sentCards;
}
 
function countDown(startingNumber){
while (startingNumber > 0){
  console.log(startingNumber);
  startingNumber -=1;

} 
console.log(startingNumber);
}