// 1. class Movie 

class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movie){
        console.log(movie.filter(same => same.rating === "PG"));
    }
}

const movies = [
    new Movie("LoveToday","supergoodfilms","PG"),
    new Movie("RajaRani","Madrastakies","PG13"),
    new Movie("Vikram","RaajKamal","R"),
    new Movie("Saarpetta","NeelamProductions","PG")
]
Movie.getPG(movies);

const CasinoRoyale = new Movie("Casino Royale","Eon Productions","PG13");
console.log(CasinoRoyale);

// 2. Class Circle

class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        return this.radius = radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        return this.color = color;
    }
    toString(){
        return (new Circle);
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle();
console.log(circle);

const l = (log) => console.log(log);

l(circle.getRadius());
l(circle.setRadius('3.0'));
l(circle.getColor());
l(circle.setColor('blue'));
l(circle.toString());
l(circle.getArea());
l(circle.getCircumference());


// 3. Write a “person” class to hold all the details.

class Person{
    constructor(name,height,weight,age,dob){
        this.name = name,
        this.height = height,
        this.weight = weight,
        this.age = age,
        this.dob = dob
    }
    getinfo(){
        console.log(`
        Name    : ${this.name}
        Height  : ${this.height} cm
        Weight  : ${this.weight} kg
        Age     : ${this.age} years
        D.O.B   : ${this.dob}
        `)
    }
}
class Movielist extends Person{
    constructor(name,height,weight,age,dob,first,last,fav,fanmade){
        super(name,height,weight,age,dob)
        this.first = first,
        this.last = last,
        this.fav = fav,
        this.fanmade = fanmade
    }
    movielist(){
        console.log(`
        Name        : ${this.name}
        First film  : ${this.first} (1975)
        Last film   : ${this.last} (2024)
        My favorite : ${this.fav} 
        Fanmade film: ${this.fanmade} (2022)
        `)
    }
} 

const rajini = new Person ("rajinikanth",175,78,74,"12/12/1950");
console.log(rajini);
rajini.getinfo();

const rajinimovies = new Movielist ("rajinikanth",175,78,74,"12/12/1950",'Aboorvaragangal','lal salam','sivaji,baasha','Petta');
console.log(rajinimovies);
rajinimovies.movielist();

// 4. write a class to calculate the Uber price

class Uber {
    constructor(startpoint,endpoint,rate){
        this.startpoint = startpoint;
        this.endpoint = endpoint;
        this.rate = rate;
    }
    calprice(){
        let distance = this.endpoint - this.startpoint;
        let commision = this.rate*0.10;
        this.rate = this.rate + commision;
        let price = (distance*this.rate).toFixed();
        console.log(`
        Amount for this travel: Rs.${price} Only
        Happy journey!
        `)
    }
}
let firstride = new Uber(3,8,15);
console.log(firstride);
firstride.calprice();
