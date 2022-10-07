'use strict';
const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.20);
console.log(addVAT(20));


const addVAT1 = function (rate) {
    return function (val) {
        return (val + val * rate);
    }
};

const addTaxFn = addVAT1(0.20);
console.log(addTaxFn(20));

//Poll project
const pollBtn = document.querySelector('.poll');

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
    registerNewAnswer() {
        const option = +prompt(`${this.question}\n${this.options.join('\n')}`);
        if(option < 4) {
            this.answers[option]++;
            this.displayResults('string');
        }
    }
};

pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = { answers: [5, 2, 3] };
poll.displayResults.call(testData1);
const testData2 = { answers: [1, 5, 3, 9, 6, 1] };
poll.displayResults.call(testData2, 'string');



