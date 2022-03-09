// Namespaces
// Ayuda a evitar la coliccion con nombres en el scope global de JS.
// Organización de código.

const restaurant = {};

restaurant.cymbals = [
    {
        cymbal: 'Pizza',
        price: 20
    },
    {
        cymbal: 'Burger',
        price: 20
    },
    {
        cymbal: 'Hotdog',
        price: 20
    }
];

restaurant.functions = {
    showMenu: cymbals => {
        console.log('Menu');
        cymbals.forEach((cymbal, idx) => {
            console.log(`${ idx }: ${ cymbal.cymbal } - $${ cymbal.price }`);
        });
    },
    order: id => {
        console.log(`Your cymbal: ${ restaurant.cymbals[id].cymbal } it's getting prepared`);
    },
    add: (cymbal, price) => {
        const newCymbal = { cymbal, price };
        restaurant.cymbals.push(newCymbal);
    }
}

restaurant.functions.order(1);
restaurant.functions.add('Taco', 20);

const { cymbals } = restaurant;
restaurant.functions.showMenu(cymbals);