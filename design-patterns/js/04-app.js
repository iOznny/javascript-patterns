// Factory
// Crea objetos basados en cierta condicion

class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    createInput() {
        return `<input type="${ this.type }" name="${ this.name }" id="${ this.name }" />`;
    }
}

class HTMLFactory {
    createElement(type, name) {
        switch (type) {
            case 'text':
                return new InputHTML(type, name);      
                
            case 'tel':
                return new InputHTML(type, name);

            case 'email':
                return new InputHTML(type, name);
        
            default:
                return;
        }
    }
}

// Create elements
const element = new HTMLFactory();
const inputText = element.createElement('text', 'client-name');
console.log(inputText.createInput());

const element2 = new HTMLFactory();
const inputText2 = element2.createElement('tel', 'client-tel');
console.log(inputText2.createInput());

const element3 = new HTMLFactory();
const inputText3 = element3.createElement('email', 'client-email');
console.log(inputText3.createInput());