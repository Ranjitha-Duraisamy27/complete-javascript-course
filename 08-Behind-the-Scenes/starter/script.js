'use strict';
/**
 * Scoping in Practice
 */

function callAge(birthYear) {
    var birthYear = 2037 - birthYear;
    console.log(birthYear);
}

callAge(1994);