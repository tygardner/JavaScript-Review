//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var peopleMaker = function(name, age, height, gender){
  
  var newPerson = {};

  newPerson.name = name;
  newPerson.age = age;
  newPerson.height = height;
  newPerson.gender = gender;

  return newPerson;
};

//Create a animal array and a person array.

 var animal = [];
 var person = [];


//Create two instances of Animal and push those into your animal array

var dog = new Animal('dog', 'kanine', 4, 'brown', 'dog food');
  animal.push(dog);
var giraffe = new Animal('long neck', 'long tongue', 4, 'yellow with spots', 'trees');
  animal.push(giraffe);


//Create two instances of person and push those into your person array.

var tyler = peopleMaker('Tyler', 26, '5 11', 'Male');
  person.push(tyler);
var emily = peopleMaker('Emily', 26, '5 2', 'Female');
  person.push(tyler);



//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.protoype.eat = function (){
  alert(this.name + ' ate ' + this.food);  //Why isn't this working?!!
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

// No, because it is a maker function that is one of it's flaws


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    It creates a new instance
  2) What's a good way to describe the keyword 'this'
    It is a template for the paramaters within the function
  3) Can a normal function which creates an object and then returns that object use the prototype?
    Yes
  4) What happens if you forget to use 'new' when calling a constructor?
    It will not create an object

*/