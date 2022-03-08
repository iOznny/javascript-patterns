// Contructor Pattern

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Client extends Person {
    constructor(name, email, company) {
        super(name, email);
        this.company = company;
    }
}

const person = new Person('Demo', 'demo@demo.com');
console.log(person);

const client = new Client('Demo', 'demo@demo.com', 'JS');
console.log(client);