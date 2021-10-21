// ## 1 - Batmobile

// - Dans car.js, créer un class `Car` avec 2 propriétés de base:
//     - `brand`
//     - `speed`
// - Ajouter 3 méthodes à la classe `Car`:
//     - `accelerate` (accélérer) qui prendra en paramètre un nombre. Cette méthode va ajouter le nombre a la propriété `speed` définie plus haut
//     - `brake` (freiner) qui prendra en paramètre un nombre. Cette méthode va soustraire le nombre à la propriété `speed` définie plus haut
//     - `describe` qui va afficher  `xxx running at yyy km/h` avec `brand` a la place de `xxx` et `speed` a la place de `yyy`
// - Créer une variable `ford` et  lui assigner l'initialisation de la classe avec la brand `ford` et speed `0` et afficher la variable ford dans la console
// - Exécuter la fonction `accelerate` de ford avec une vitesse de 50 km/h et afficher `ford` dans la console
// - Exécuter la fonction `brake` de ford avec une vitesse de 25 km/h et afficher `ford` dans la console
// - Faites la même chose avec une nouvelle voiture


class Car {
    constructor(brand,speed){
        this.brand = brand
        this.speed= speed
    }
    accelerate(num){
        this.speed +=num
    }
    brake(num){
        this.speed -=num
    }
    describe(){
        console.log(`${this.brand} running at ${this.speed} km/h`)
    }
}

let ford = new Car("ford",0)
ford.accelerate(50)
// console.log(ford)
ford.brake(25)
// console.log(ford)
ford.describe()

let Batmobile= new Car("Batmobile",0)
Batmobile.accelerate(280)
Batmobile.describe()
Batmobile.brake(230)
Batmobile.describe()