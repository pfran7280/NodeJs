

const deadpool = {
    nameHero: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    // age: 50,
    getName() {
        return `${ this.nameHero } ${this.lastName} ${this.power}`;
    }
}

// const nameHero = deadpool.nameHero;
// const lastName = deadpool.lastName;
// const power    = deadpool.power;

// const {nameHero, lastName, power, age = 0} = deadpool;

// console.log(nameHero,
//     lastName,
//     power,
//     age);

function printHero({nameHero, lastName, power, age = 0}) {

    console.log(nameHero, lastName, power, age);
}

// printHero(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// const [h1,h2,h3] = heroes;
const [,,h3] = heroes;

console.log(h3);