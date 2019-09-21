/*Primitives and Objects
PRIMITIVES:
    -numbers
    -strings
    -booleans
    -undefined
    -null

OBJECTS:
    -everything else

-------------------------------------------------------
in Javascript: CLASS = CONSTUCTOR = PROTOTYPE 

JS is a PROTOTYPE-BASED language, that makes inheritance possible

every object has PROTOTYPE PROPERTY - methods and properties that we want allow to be inherited by child objects

Each object is an instance of the OBJECT constuctor

PROTOTYPE CHAIN - when we want to access method or property on some object,
we first try to find it in that exact object. If it can not find, it will look in objects prototype,
which is prototype property of it's parent. It continues by until there is no more prototype, which is NULL


*/


var dule = {
    name: "Dule",
    age: 23,
    job: "Microsoft Sharepoint developer"
};


//FUNCTION CONSTUCTOR - PATTERN for create a blueprint
//NEW keyword creates empty object and allow Person function gets its own scope, because of that we can use this keyword
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }
}

Person.prototype.calculateAge2 = function() {
    console.log(2019 - this.yearOfBirth + " iz prototype-a")
}

var dule = new Person("Dule", 23, "Microsoft Sharepoint developer");

dule.calculateAge();

/*Javascript console:

Person.prototype === dule.__proto__    => returns true  - prototype of dule object is prototype property of Person constuctor
dule.hasOwnProperty('name')  => returns true  - hasOwnProperty is located in prototype property of Object . dule is inherited from Person, and Person in implicit inherited from Object, that's why dule has that method available (because of PROTOTYPE CHAIN)
dule instanceof Person  => returns true
*/
//--------------------------------------------------------------------------------------------------------------------------------------------
/*
Another way to create objects - Object.create
with Object.create we inherit directly from the one we passed in first argument,
but in function constructor, newly created object inherits from constructors prototype property
*/
var personProto = {
    calculageAge2: function() {
        console.log(2019 - this.yearOfBirth + " iz prototype-a")
    }
}

var dule = Object.create(personProto);
dule.name = 'Dule';
dule.yearOfBirth = 1996;
dule.job = 'Microsoft Sharepoint developer';

var sneza = Object.create(personProto, 
    {
        name: { value: 'Sneza'},
        yearOfBirth: {value: 1995},
        job: {value: 'student'}
    });


/*
Primitives vs Objects
primitive variable hold data inside a variable itself
Object variable contain reference where Object is stored in memory
*/

var a = 23;
var b = a;
a = 46;   //only a is changed, b remains 23

console.log(a);
console.log(b);

var obj1 = {
    name: 'Dule',
    age: 23
};

var obj2 = obj1;

obj1.age = 24;  //obj1 and obj2 are changed

console.log(obj1.age);
console.log(obj2.age);


var age = 23;
var obj = {
    name: 'Dule',
    city: 'Beograde'
}

//same in functions, primitive arguments are new variable and they will be deleted on the end of the function.
//but object arguments will be changed, because it is just reference in argument, not new object
function change(a,b){
    a = 30;
    b.city = 'California';
}

//here it will change both values, because it directly access varibles from global scope
function change2() {
    age = 26;
    obj.city = 'Novi Sad';
}

change(age, obj);

console.log(age);
console.log(obj);

change2();
console.log(age);
console.log(obj);


/*
FUNCTIONS

*/


var years = [1990, 1965, 1937, 2005, 1998]

//fn is a callback function - that is important when we have t owait, api requests, event handlers...
//https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i =0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

//we don't call calculateAge(), but instead without parenthesis, because it is callback function
var ages = arrayCalc(years, calculateAge);
console.log(ages);

//here we are ensure that callback function will be executed after alert above that
function doHomework(subject, callback) {
    //alert(`Starting my ${subject} homework.`);
    callback();
  }
  function alertFinished(){
    //alert('Finished my homework');
  }
  doHomework('math', alertFinished);

  //functions like a return values from other functions
  function interviewQuestion(job) {
      if (job ==='designer'){
          return function (name) {
            console.log(name + ' is a designer');
          }
      }
      else if (job === 'teacher'){
        return function (name) {
            console.log(name + ' is a teacher');
          }
      }
  }

  var teacherQuest = interviewQuestion('teacher');
  teacherQuest('Dule');

  //second way:
  interviewQuestion('teacher')('Dule');

  console.log(teacherQuest);

/*
IIFE (IFI) - Immediately Invoked Function Expressions - use for scoping and make private varibales and inner functions in that iife function
with ES6 and block score with LET and CONST keywords, we have not more to use IIFE
-first parenthesis for make expression, second to make a call
*/


(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
    
}());