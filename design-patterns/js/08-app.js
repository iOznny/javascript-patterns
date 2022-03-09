/**
 * Mediator
 * Te permite comunicarte condiferentes objetos a la vez.
 * Actua solo sobre objectos ya localizados.
*/

function Seller(name) {
    this.name = name;
    this.room = null;
}

Seller.prototype = {
    offer: (article, price) => {
        console.log(`The following item is a ${ article } starting at a price of $${ price }`);
    },
    soldOut: buyer => {
        console.log(`Selled to ${ buyer }`);
    }
}

function Buyer(name) {
    this.name = name;
    this.room = null;


}

Buyer.prototype = {
    offer: (buyer, amount) => {
        console.log(`${ buyer.name }: ${ amount }`);
    }
}

function Auction() {
    let buyers = {};

    return {
        regiser: user => {
            buyers[user.name] = user;
            user.room = this;
        }
    }
}

// Create objects
const auction = new Auction();

const kiran = new Seller('Kiran');

const aurora = new Buyer('Aurora');
const leia = new Buyer('Leia');

// Register to auction
auction.regiser(aurora);
auction.regiser(leia);
auction.regiser(kiran);

// Seller
kiran.offer('Mustang 66', 300);

// Buyer
aurora.offer(aurora, 500);
leia.offer(aurora, 520);
aurora.offer(aurora, 550);
leia.offer(aurora, 700);

kiran.soldOut('Kiran');