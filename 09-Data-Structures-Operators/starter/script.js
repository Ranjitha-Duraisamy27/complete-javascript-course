'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/**
 * Coding Challenge 1
 */

//Task 1
const [players1, players2] = game.players;
console.log('Players1 => ', players1);
console.log('Players2 => ', players2);

//Task 2
const [team1Gk, ...team1FieldPlayers] = players1; 
const [team2Gk, ...team2FieldPlayers] = players2;
console.log(`For team 1 ${team1Gk} is the goal keeper and ${team1FieldPlayers} are the field players`);
console.log(`For team 2 ${team2Gk} is the goal keeper and ${team2FieldPlayers} are the field players`);

//Task 3
const allPlayers = [...players1, ...players2];
console.log('All Players : ', allPlayers);

//Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Final players list of team 1 : ', players1Final);

//Task 5
const { team1, x: draw, team2 } = game.odds;
console.log('Team 1 Odds : ', team1);
console.log('Draw : ', draw);
console.log('Team 2 odds : ', team2);

//Task 6
const printGoals = (...players) => {
  console.log(`Players: ${players}, Total Score: ${players.length}`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//Task 7

(team1 > team2) && console.log('Team 1 is more likely to win');
(team2 > team1) && console.log('Team 2 is more likely to win');


/**
 * Challenge 2: Looping
 */

//Task 1
for (const [index, player] of game.scored?.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

//Task 2 
let sum = 0;
const values = Object.values(game.odds);
for (const value of values) {
  sum += value;
}

console.log(`Average is ${sum / values.length}`)

//Task 3
for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[key] ?? 'Draw'}: ${value}`)
}

//Bonus
const scores = {};
for(const player of game.scored) {
  scores[player] =  (scores[player] ?? 0) + 1;
}
console.log(scores);


/**
 * Challenge #3: Map
 */

 const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Task 1 : Create unique event array
const events = [...new Set(gameEvents.values())];
console.log(events);

//Task 2: remove key 64
gameEvents.delete(64)
console.log(gameEvents);

//Task 3

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

//Task 4
for(const [key, value] of gameEvents) {
  const str = `[${key <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key} : ${value}`;
  console.log(str);
}


//Challenge #4

const textarea = document.createElement('textarea');
document.querySelector('body').appendChild(textarea);
const button = document.createElement('button');
button.textContent = 'Submit';
document.querySelector('body').appendChild(button);

button.addEventListener('click', () => {
  const inputStr = textarea.value;
  const listOfStr = inputStr.split('\n');
  for (const [key, word] of listOfStr.entries()) {
    const wordArr = word.trim().toLowerCase().split('_');
    if(wordArr.length > 1) {
      const [word1, word2] = wordArr;
      const finalStr = word1 + word2[0].toUpperCase() + word2.slice(1);
      console.log(`${finalStr} ${'✅'.repeat(key + 1)}`);
    }
  }
})
