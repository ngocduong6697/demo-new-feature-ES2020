const regexp = /[a-o]/g;
const str = 'ngoc';
const iterator = str.matchAll(regexp)
Array.from(iterator, result => console.log(result))

// OUT PUT
// ['n', index: 0, input: 'ngoc, groups: undefined]
// ['g', index: 1, input: 'ngoc, groups: undefined]
// ['o', index: 2, input: 'ngoc, groups: undefined]
// ['c', index: 3, input: 'ngoc, groups: undefined]