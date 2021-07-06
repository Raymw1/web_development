const getFlag = require("./getflag");
const greeting = getFlag("--greeting");
const name = getFlag("--name");

console.log(`${greeting} ${name}`);

