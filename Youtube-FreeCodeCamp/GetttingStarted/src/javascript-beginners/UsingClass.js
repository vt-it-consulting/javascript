

class SpaceShuttle{
    constructor(targetPlanet) {
        this.planet = targetPlanet;
    }
}
var space = new SpaceShuttle("Mars");
console.log(space.planet)


class  Book{
    constructor(author) {
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(author){
        this._author = author;
    }
}

var book = new Book("Vincent Tene")
book.writer ="Software Engineer"

console.log(book.writer)


class  Weather{
    constructor(temp) {
        this._temp = 5/9*(temp - 32)
    }

    get temperature(){
        return this._temp;
    }

    set temperature(newTempa){
        this._temp = newTempa;
    }
}

var weather = new Weather(50);
console.log(weather.temperature)

weather.temperature = 100;
console.log(weather.temperature)