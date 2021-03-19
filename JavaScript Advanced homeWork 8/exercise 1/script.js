class Person {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  set firstName(firstName) {
    if (!firstName) {
      throw new Error("Please enter the first name");
    } else {
      this._firstName = firstName;
    }
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    if (!lastName) {
      throw new Error("Please enter the first name");
    } else {
      this._lastName = lastName;
    }
  }
  get lastName() {
    return this._lastName;
  }


set age(age) {
    if (!age) {
      throw new Error("Please enter the first name");
    } else {
      this._age = age;
    }
  };
  get age() {
    return this._age;
  }

  set address(address) {
    if (!address) {
      throw new Error("Please enter the first name");
    } else {
      this._address = address;
    }
  }
  get address() {
    return this._address;
  }
}

class Student extends Person {
    constructor(firstName, lastName, age, address, arr){
        super(firstName, lastName, age, address);
        this.arr = arr;
        this.academy = "New Academy";
    }
    static check(student, subject){
        if(student instanceof Student) {
            if(student.arr.includes(subject)){
                console.log(`${student._firstName} ${student._lastName} is study ${subject} in ${student.academy}`)
                return;
            }
            else {
                console.log(`${student._firstName} ${student._lastName} does not study ${subject} in ${student.academy}` );
            }
        }
    }
}

let mile = new Student("Mile", "Panika", 50, "Skopje", ["JS", "CSS", "HTML", "C#", "PHP"]);
let toso = new Student("Toso", "Malerot", 50, "Skopje", ["JS", "CSS", "HTML", "C#", "PHP"]);
let cacko = new Student("Cacko", "Konopishki", 50, "Skopje", ["JS", "CSS", "HTML", "C#", "PHP"]);
let blazo = new Student("Blazo", "Razbirash", 50, "Skopje", ["JS", "CSS", "HTML", "C#", "PHP"]);
let risto = new Student("Risto", "Razbirash", 50, "Skopje", [ "JS", "CSS", "HTML", "C#", "PHP"]);

Student.check(mile, "CSS");
mile.fullName();

Student.check(toso, "HTML");
toso.fullName();

Student.check(cacko, "JS");
cacko.fullName();

Student.check(blazo, "PHP");
blazo.fullName();

Student.check(risto, "C#");
risto.fullName();

