function Programmer(name, position, age, language) {
    this.name = name,
    this.position = position,
    this.age = age,
    this.language = language,
    this.Print = function() {
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Age: " + this.age);
        console.log("Language: " + this.language);
    }
}

var Andre = new Programmer("Andre", "Instructor", 25, "JavaScript");
Andre.Print();