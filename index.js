class Cat {
    color;
    name;
    age;
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    meow() {
        console.log("meow");
    }
    claw() {
        console.log("Ouch! Why'd you scratch me " + this.name + "?");
    }
    birthday() {
        this.age++;
        console.log("Happy birthday " + this.name + "! You're " + this.age + " years old!");
    }

}

const cat1 = new Cat("Chalupa", 6, "orange");
const cat2 = new Cat("Poppy", 11, "Brown");
console.log(cat1, cat2);

cat1.meow();
cat1.claw();
cat1.birthday();
cat2.meow();
cat2.claw();
cat2.birthday();


class Pirate {
  constructor(name, age, numTeeth = 16) {
    this.name = name;
    this.age = age;
    this.numTeeth = numTeeth;
  }
  yarr() {
    console.log("Yarr");
  }
  scurvy() {
    if(this.numTeeth > 0) {   
        this.numTeeth--;
        console.log("There goes another toof. Got " + this.numTeeth + " left");
    }
    else {
        console.log("Don't gotta worry about the scurvy anymore!");
    }
  }
  greeting() {
    console.log("Ahoy there matey!");
  }
}

const jollyRoger = [new Pirate("Blackbeard", 22,7), new Pirate("Calico Jack", 68, 86), new Pirate("Anne Bonny", 19)];
const blackPearl = [new Pirate("Francois l'Olonnais", 32, 32), new Pirate("Stede Bonnet", 14001, 0), new Pirate("Black Bart", 2, 4)];

for(pirate of jollyRoger) {
    console.log("Aye, me name be " + pirate.name + " and I be " + pirate.age + " years old. I got " + pirate.numTeeth + " teeth.");
}

for(pirate of blackPearl) {
    console.log("Aye, me name be " + pirate.name + " and I be " + pirate.age + " years old. I got " + pirate.numTeeth + " teeth.");
}