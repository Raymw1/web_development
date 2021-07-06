const path = require("path");
const myModule = require("./exports");
const fileName = path.basename(__filename);

console.log(`${fileName} ${myModule}`);
