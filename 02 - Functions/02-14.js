/*
Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/
"use strict";

const { strictEqual } = require("assert");

(function () {
    function amountToCoins(amount,coins) {
        var list = [];
        for (var i = 0; i < coins.length; i++) {
            while (amount >= coins[i]) {
                amount = amount - coins[i];
                list.push(coins[i]);
            }
        }
        return list;
    }

    console.log(amountToCoins(30, [25, 10, 5, 2, 1]));
})();