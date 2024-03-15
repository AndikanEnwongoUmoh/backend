// Classes

class Human {


  constructor(
    public name: string,
    public height: number,
    public age: number,
    public complexion: string,
    public isOld: boolean
  ) {
    name = name;
    height = height;
    age = age;
    complexion = complexion;
    isOld = isOld;
  }

  createHuman() {
    return `Hi, my name is ${this.name}. I am ${this.age} years old. I am ${this.height}cm tall and I am ${this.complexion} in complexion. It is ${this.isOld} that I'm old`;
  }
}
const person = new Human("Walter", 175, 50, "white", true);

// console.log(person.createHuman());


// Inheritacnce
 class Employee extends Human {
    game: string;

    constructor(
         name: string,
         height: number,
         age: number,
         complexion: string,
         isOld: boolean,
         game: string
        ) {
        super(name, height, age, complexion, isOld);
        this.game = game;

    }
    department(){
        return  `Hi, my name is ${this.name}. I am ${this.age} years old. I am ${this.height}cm tall and I am ${this.complexion} in complexion. It is ${this.isOld} that I'm old and I like playing ${this.game} a lot`;
    }  
 }
 const childClass = new Employee("James", 180, 25, "black", false, "football");
//  console.log(childClass.department())


//  Access Modifiers
// Encapsulation: making sure that class properties and methods are private unless they need to be public
// Types of Access Modifiers
// private: Can only be accessed within the class its called in
// readonly: Can only be read but not changed
// public: Can be accessed anywhere
// protected: Can only be accessed within the class or subclasses


// polymorphism
// This is call
 class Animal{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makesound(){
        console.log("some generic sound");
        
    }
 }

 class dog extends Animal{
    makesound(){
        console.log('woof, woof');
        
    }
 }
 class cat extends Animal{
    makesound(){
        console.log('meow, meow');
        
    }
 }

 function makeAnimalSound(animal: Animal) {
    animal.makesound();
 }

 const dog1 = new dog('Max');
 const cat1 = new cat('Felix');

 makeAnimalSound(dog1)
 makeAnimalSound(cat1)