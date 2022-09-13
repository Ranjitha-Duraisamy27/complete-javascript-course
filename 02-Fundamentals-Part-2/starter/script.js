'use strict'
const calcAvg = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAvg(85, 54, 41);
const avgKoalas = calcAvg(23, 34, 27);
const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= avgKoalas * 2) {
        console.log('Dolphins Won!');
    } else if(avgKoalas >= avgDolphins) {
        console.log('Koalas Won!');
    } else {
        console.log('No one wins😒')
    }
}

checkWinner(avgDolphins, avgKoalas);

//Array Challenge
const bills = [125, 555, 44];
const calcTip = (amount) => {
    const percentage = (amount >= 50 && amount <= 300) ? 0.15 : 0.20;
    return amount * percentage;
}

const tips = bills.map(bill => calcTip(bill));
const total = bills.map(bill => calcTip(bill) + bill);
console.log(`Your tip is ${tips} and toatl bill is ${total}`);