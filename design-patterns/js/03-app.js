// Singleton
// No te permite crear multiples intancias de una misma clase

let instance = null;
class Person {
    constructor(name, email) {
        if (!instance) {
            this.name = name;
            this.email = email;
            instance = this;
        } else {
            return instance;
        }
    }
}

// First Instance
const person = new Person('Demo', 'demo@demo.com');
console.log(person);

// Second Instance (Return first instance)
const personTwo = new Person('Ana', 'ana@demo.com');
console.log(personTwo);