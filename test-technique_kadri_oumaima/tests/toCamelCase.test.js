const toCamelCase = require('./toCamelCase');

console.log(toCamelCase('the-force-is-strong-with-this-one'))
console.log(toCamelCase('good-morning'))

console.log(toCamelCase('-good-night'))
console.log(toCamelCase('- how- are- you'))
console.log(toCamelCase('-i -am -fine'))
console.log(toCamelCase(' '))
console.log(toCamelCase(' -'))

console.log(toCamelCase(' _hi'))