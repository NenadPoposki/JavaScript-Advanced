function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`Person full name is ${this.firstName} ${this.lastName}`)
        return `${this.firstName} ${this.lastName}`;
    }
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        console.log(`${this.name} eating`)
    }
    this.sleep = function () {
        console.log(`${this.name} sleeping`)
    }
}

function Cat(name, age, color, ownerId) {
  Object.setPrototypeOf(this, new Animal(name, age));
  this.color = color;
  this.ownerId = ownerId === undefined ? null : ownerId;
  this.meow = function () {
    console.log(`This ${this.name} says Meow`);
  };
  this.ownerIdMethod = function (owner) {
    if (this.ownerId === null) {
      console.log(`The cat does not have owner`);
    } else {
      if (owner[this.ownerId] == undefined) {
        console.log(`There is not owner`);
      } else {
        console.log(
          `${owner[this.ownerId].getFullName()} - ${owner[ownerId].age}`
        );
      }
    }
  };
}

function PersianCat(name, age, color, eyeColor) {
  Object.setPrototypeOf(this, new Cat(name, age, color, eyeColor));
  this.eyeColor = eyeColor;
  this.furDescription = function () {
      console.log(`The ${this.name} is full fur!`);
  }
}

function RagDollCat(name, age, color, weight, isFriendly) {
    Object.setPrototypeOf(this, new Cat(name, age, color));
    this.weight = weight;
    this.isFriendly = typeof isFriendly != "boolean" ? null : isFriendly;
    this.printPersonality = function (type) {
        if(type === true){
            this.isFriendly = true;
        }
        else {
            this.isFriendly = false;
            copnsole.log(`The ${this.name} is not friendly`)
        }
    }

}

let mile = new Person(25, "Mile", "Panika", 100);
let toso = new Person(26, "Toso", "Malerot", 100);
let cacko = new Person(27, "Cacko", "Konopishki", 100);
let blazo = new Person(28, "Blazo", "Razbirash", 100);
let risto = new Person(29, "Risto", "Razbirash", 100);

let people = [mile, toso, cacko, blazo, risto];
let colors = ["White", "Black", "Grey", "Brown", "Mixed:)"];

let tiger = new RagDollCat("Tiger", 2, colors[Math.floor(Math.random() * colors.length)], 2, 5);
let lio = new PersianCat("Lio",5,colors[Math.floor(Math.random() * colors.length)], 3, colors[Math.floor(Math.random() * colors.length)]);


console.log(mile.getFullName());

console.log(tiger);
tiger.printPersonality(true)

console.log(lio);

console.log(tiger.ownerIdMethod(people));
console.log(tiger.eat());
console.log(tiger.sleep());

console.log(lio.ownerIdMethod(people));
console.log(lio.sleep());
console.log(lio.eat());




