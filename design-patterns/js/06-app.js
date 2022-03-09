// Mixin Pattern
// Agregar funciones a una clase una vez que ha sido creada

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Client {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Functions
const fnPerson = {
    information() {
        console.log(`Information is: ${ this.name } & ${ this.email }`);
    },
    fnName() {
        console.log(`Name is: ${ this.name }`);
    },
    fnEmail() {
        console.log(`Email is: ${ this.email }`);
    }
};

// Add functions to Person Class with Mixin Pattern
Object.assign(Person.prototype, fnPerson);
Object.assign(Client.prototype, fnPerson);

const person = new Person('Person', 'a@b.c');
const client = new Person('Client', 'a@b.c');

console.log(person);
person.information();
person.fnName();
person.fnEmail();