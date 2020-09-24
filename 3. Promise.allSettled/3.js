Promise.all([
    Promise.reject('A'),
    Promise.reject('B'),
    Promise.resolve('C'),
    Promise.reject('D')
]).catch((err) => {
    console.log('Promise all', err); // Promise all A
})