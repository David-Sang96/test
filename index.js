// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }

//   getCircumference() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// // circle1.radius === 1; // Should return true
// // circle1.getArea() === 3.141592653589793; // Should return true
// // circle1.getCircumference() === 6.283185307179586; // Should return true

// const circle1 = new Circle(1);
// console.log(circle1.radius === 1);
// console.log(circle1.getArea() === 3.141592653589793);
// console.log(circle1.getCircumference() === 6.283185307179586);

class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  eat() {
    return `The ${this.species} named ${this.name} is eating.`;
  }
  sleep() {
    return `The ${this.species} named ${this.name} is sleeping.`;
  }
  reproduce() {
    return `The ${this.species} named ${this.name} is reproducing.`;
  }
}

class Dog extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
    this.name = name;
    this.age = age;
    this.species = species;
  }
  bark() {
    return ` The dog named ${this.name} is barking.`;
  }
}

class Cat extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
    this.name = name;
    this.age = age;
    this.species = species;
  }
  meow() {
    return `The cat named ${this.name} is meowing.`;
  }
}

class Bird extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
    this.name = name;
    this.age = age;
    this.species = species;
  }
  fly() {
    return `The bird named ${this.name} is flying.`;
  }
}

class Fish extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
    this.name = name;
    this.age = age;
    this.species = species;
  }
  swim() {
    return ` The fish named ${this.name} is swimming`;
  }
}

const fido = new Dog("Fido", 5, "Golden Retriever");
const felix = new Cat("Felix", 3, "Tabby");
const tweety = new Bird("Tweety", 1, "Canary");
const nemo = new Fish("Nemo", 2, "Clownfish");

console.log(fido.bark());
console.log(fido.eat());

console.log(felix.sleep());
console.log(felix.meow());

console.log(tweety.reproduce());
console.log(tweety.fly());

console.log(nemo.swim());
console.log(nemo.eat());
