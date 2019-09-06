
/*
////////////////////////////////////////////////////////////////////////////////////////////
Hoisting, scope chain and "this" excercise
///////////////////////////////////////////////////////////////////////////////////////////

//Hoisting really depends on Execution Context. When function is called, Execution Context has 2 phases:
1) creation phase: 1.1) creation of Variable Object :   1.1.1) argument object is created
                                                    1.1.2) function declarations inside that function, like pointers on these functions
                                                    1.1.3) variable declarations. Property is declared in the Variable Object for each variable inside that function and property is set to undefined
                 1.2) creation of Scope Chain  - Scope always rises from inside to outside functions. Inside function has own scope + scope of outer functions
                 1.3) creation of "this" variable

2) execution phase - code is executing line by line

*/

f1();  // Hoisting - it will work because of Hhoisting

function f1(){
    console.log("It works!");
}

/*
//It will not work because of Create Exxecutio Phase, variables are on start declare as undefined, and function like pointers
//That is the reason of error, f2 is here a variable that is declared as undefined, and browser does not know that f2 is a function
f2();

var f2 = function() {
    console.log("It will not work!");
}
*/

console.log(firstname);  // Hoisting - we get undefined, also because of Execution Context
var firstname = "Dusan";
console.log(firstname);  // we get age as expected

/////////////////////////////////////////////////////////////////////////////////
//Scope chain - that is order how functions are written, not how functions are called. Order of calling function is Execution Stack

//Example 1
var a = "Dusan ";
first();

function first(){
    var b = 23;
    second();

    //second() function has own scope, but also a scope of first(), and also a global scope. That is reason why it has access to a,b and c variables
    function second() {
        var c = " FON ";
        console.log(a+b+c);
    }
}

//Example 2 of Scope Chain
var v0 = "Ruzic";
f1();

function f1() {
    var v1 = "FON";
    f2();

    function f2(){
        var v2 = "student";
        f3();
    }
}

function f3(){
    var v3 = "Dusan";
    console.log(v0 + v3); //it works!
    //console.log(v0 + v1 + v2 + v3); //it doesnt work because of Scope Chain. f3() function has it's own scope and does not have access to scope of other functions, that don't wrap f3()
}


//////////////////////////////////////////////////////////////////////////////////
/* 
this keyword  - it can point on different things:
    1) Regular function call - "this" keywork points on global object, which is Window in browser
    2) Method call - "this" keywork points on object that is calling the method

    "this" don't get it's own value until a funtion where it is defined is actually called

*/

function ff1() {
    console.log(this);
}

ff1();  // it will print Window object

var dule = {
    name: "Dusan",
    surname: "Ruzic",
    faculty: "FON",
    age: 0,
    countAge: function() {
        console.log(this);
        this.age = 23;
    }
}

dule.countAge(); // it will print dule Object
console.log(dule);

var sneza = {
    name: "Snezana",
    surname: "Ruzic",
    faculty: "FON",
    age: 0,
    countAge: function() {
        console.log(this);
        
        function innerCountAge() {
            console.log(this);  //canot access sneza object directly, because innerCountAge() method is in another method, and that is a reason why it points on Window object on default
        }
        innerCountAge();
        
    }
}

sneza.countAge();
dule.calculateAge = sneza.countAge;
dule.calculateAge();
//console.log(dule);