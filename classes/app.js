
/*
class Vehicle {



constructor(vin, make, model) {
  this.vin = vin;
  this.make = make;
  this.model = model;
  console.log("creating a new instance of vehicle") 
  }
goVroom(){
  console.log("Vroom!")
}
start(){
  this.running = true
  console.log("running")
}
stop(){
  this.running = false
  console.log("Stop")
}
toString(){
  

}
}
const toyota = new Vehicle ("1233214", "boeing", "2022")
const  tesla = new Vehicle  ("1233214", "boeing", "2022")
const ford = new Vehicle  ("1233214", "boeing", "2022")

toyota.goVroom()
tesla.goVroom()

toyota.start()
tesla.start()

toyota.stop()
tesla.stop()






console.log(toyota, tesla)

let arr = [1,2,3]
let arr2 = new Array()



//console.log(arr2)
//arr2.forEach((x) => console.log(x))

console.log(tesla.toString)
*/




/*
  class Cat {
  
  
  constructor(breeds, color, age) {
  this.breeds = breeds
  this.color = color
  this.age = age
  this.climbing = true
  }
  

  
  Start() {
    this.climbing = true;
    console.log('climbing')
  }

  toString() {
    return 'Cat (' + this.breeds + ') is a ' +
         this.color + ' model ' + this.age;
}

}
const cat1  = new Cat('pershan', "black", "23" )


console.log(cat1) 
*/


/*
 class Pirate {
  constructor (height, age, power) {
    this.height = height
    this.age = age
    this.power = power
  }
 }

*/









//ex 3
/*
class Car {
  constructor(number) {
    this.number = number
  }
}
const freighter = []
for(let i = 0; i < 100; i++) {
  freighter.push(new Car(i))
}

console.log(freighter)
*/

/*
//exercise 1
class Governor {
  static staticAge = '48';
  static staticState = 'New Jersey';
  static staticParty = 'democrat';
  
}

console.log(Governor.staticAge);
console.log(Governor.staticParty);
console.log(Governor.staticState);
*/






//exercise 2
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  working() {
      return this.name + " is working, ";
  }
  eating() {
      return this.name + " is eating";
  }
  sleeping() {
      return this.name + " is sleeping";
  }
}
class Postalworker extends Person {
  constructor(name, age) {
      super(name, age);
  }
  driving() {
      return this.name +
        " is driving mail truck";
  }
  working() {
      return super.working() + 'delivering mail.';
  }
}
class Chief extends Person {
  constructor(name, age) {
      super(name, age);
  }
  working() {
      return this.name +
        " Training new recruits";
  }
  takingabreak() {
      return super.working() + 'on his tan at a tanning booth';
  }
}
