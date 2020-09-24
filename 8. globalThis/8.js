console.log(window);
console.log('window for browsers');
console.log(self);
console.log('self for web workers');
console.log('global for nodejs');

// test on environment nodejs
// console.log(global);
console.log(globalThis);
console.log('globalThis for all environments');

// check
console.log(window === globalThis); // true

// test on environment nodejs
// console.log(global === globalThis); // true

