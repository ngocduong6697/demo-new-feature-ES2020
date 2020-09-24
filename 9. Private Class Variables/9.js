class Person {
    #name = 'Ngoc';
    #age = 23;
    #sex = 'male';
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getSex(){
        return this.#sex;
    }
}

const person = new Person();

// right syntax
console.log('Name: ', person.getName());
console.log('Age: ', person.getAge());
console.log('Sex: ', person.getSex());

// wrong syntax
// console.log('Name: ', person.#name);
// console.log('Age: ', person.#age);
// console.log('Sex: ', person.#sex);