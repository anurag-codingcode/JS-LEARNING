
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";


Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

// Creating objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


console.log(myFather.nationality); 
console.log(myMother.name()); 
