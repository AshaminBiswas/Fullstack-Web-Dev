// default import
import multiply from "./mathEs6.js";
console.log(multiply(2, 2));

// named import
import { add } from "./mathEs6.js";
console.log(add(1, 5));

// module import
const operations = require("./mathEs6.js");
operations.div(4, 20);
