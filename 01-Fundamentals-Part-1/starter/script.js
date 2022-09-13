/**
 * Variables
 */
let country = 'India';
let continent = 'Asia';
let population = 10_000_000;
console.log(country);
console.log(continent);
console.log(population);

/**
 * BMI calculation
 */

const mWeight = 78;
const mHeight = 1.69;
const jWeight = 92;
const jHeight = 1.95;

const mBmi = mWeight / (mHeight ** 2);
const jBmi = jWeight / (jHeight ** 2);
const marksBmiHigher = mBmi > jBmi;
if(marksBmiHigher) {
    console.log(`Mark's BMI (${mBmi}) is higher than Jhon's BMI (${jBmi})`);
} else {
    console.log(`Jhon's BMI (${jBmi}) is higher than Mark's BMI (${mBmi})`);
}

/**
 * Logical operators
 */

const dolphinScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

if(dolphinScore > koalasScore && dolphinScore >= 100) {
    console.log('Dolphin won!!');
} else if(koalasScore > dolphinScore && koalasScore >= 100) {
    console.log('Koalas won !!');
} else if(dolphinScore >= 100 && koalasScore >= 100){
    console.log('Both won the Trophy');
} else {
    console.log('No teams win the Trophy')
}

/**
 * Ternary Operators
 */

const bill = 430;

const tipPercentage = (bill >= 50 && bill <= 300) ? 15 : 20;
const tipAmount = bill * (tipPercentage / 100);
const total = bill + tipAmount;
console.log(`The bill was ${bill}, the tip was ${tipAmount}, and the total value ${total}`);