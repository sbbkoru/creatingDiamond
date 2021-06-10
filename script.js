"use strict";

// DIAMOND

const diamond = function (num) {
  if (num <= 0 || num % 2 === 0) return null;
  let str = "";
  for (let i = 0; i < num; i++) {
    let space = Math.abs((num - 2 * i - 1) / 2);
    str += " ".repeat(space);
    str += "*".repeat(n - 2 * space);
    str += "\n";
  }
  return str;
};

console.log(diamond(11));
