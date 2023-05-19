
const inspirationalMessage = ['Work harder than you think you did yesterday', 'Luck is great, but most of life is hard work', 
'Great things come from hard work and perseverance. No excuses']; 

const randomNumber = (array) => { 
 const randomIndex = Math.floor(Math.random() * 3); 
 const randomElement = inspirationalMessage[randomIndex];  
 return randomElement; 
}; 

console.log(randomNumber(inspirationalMessage)); 

