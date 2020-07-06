function MovingObject(name) { 
    this.name = name;
}


Function.prototype.inherits1 = function (parentClass) {
    function Surrogate() { }
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}



Function.prototype.inherits = function (parentClass) {
    this.prototype = Object.create(parentClass.prototype)
    this.prototype.constructor = this;
}


function Ship(name) { 
    this.name = name;
}


Ship.inherits(MovingObject);



function Asteroid(name) { 
    this.name = name;
}
Asteroid.inherits(MovingObject);

Asteroid.prototype.explode = function () {
    console.log(this.name + ' just exploded!!!')
}



MovingObject.prototype.fly = function () {
    console.log(this.name + ' is flying!');
}



const ship1 = new Ship("SpaceX");
ship1.fly();
const asteroid1 = new Asteroid("4Vesta");
asteroid1.fly();

asteroid1.explode();
// ship1.explode();
// console.log(MovingObject.prototype);

