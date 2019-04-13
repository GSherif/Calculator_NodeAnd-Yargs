const Operations = require('./Operations/index');
const yargs = require('yargs');

let validOperations = yargs.array(['add', 'sub', 'mul', 'div', 'remainder']).argv;

if (validOperations.add != undefined) {
    let { add } = yargs.array('add').argv;
    console.log(Operations.add(...add));
} else if (validOperations.sub !== undefined) {
    let { sub } = yargs.array('sub').argv;
    console.log(Operations.sub(...sub));

} else if (validOperations.mul != undefined) {
    let { mul } = yargs.array('mul').argv;
    console.log(Operations.mul(...mul));
} else if (validOperations.div != undefined) {
    let { div } = yargs.array('div').argv;
    console.log(Operations.div(...div));
} else if (validOperations.remainder != undefined) {
    let { remainder } = yargs.array('remainder').argv;
    console.log(Operations.remainder(...remainder));
}