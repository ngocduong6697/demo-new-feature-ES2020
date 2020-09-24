const x = Number.MAX_SAFE_INTEGER;
console.log(x);
// 9007199254740991, this is less than 2^53

const y = x + 1;
console.log(y);
// 9007199254740991, ok, checks out

const z = x + 2;
console.log(z);
// 9007199254740992, wait, that's the same as above!

console.log('We can solve this with BigInt, like this:');

console.log('Style 1 :Adding character ‘n’ end of the number');
const theBiggestInt = 900719925474099120n;
console.log(theBiggestInt);

console.log('Style 2 :Declare BigInt with the number without character ‘n’');
const alsoHuge = BigInt(90071992547409920)
console.log(alsoHuge);
console.log('Style 3 :Declare BigInt with the string without character ‘n’');
const hugeButString = BigInt(900719925474099200)
console.log(hugeButString);

console.log('This is a new Primitive Types:');
console.log(typeof 123); //number
console.log(typeof 123n); //BigInt

console.log('The Primitive Types of Number & BigInt are compared as usual :');
console.log(23n === BigInt(23)); // true
console.log(23n == 23); // true