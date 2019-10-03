
/*
Synchronous: means line by line, in 1 thread
Asynchronous - for example, with setTimeout()... that timer with callback function goes into web apis environment and wait to be transfered to message queue when timer is go up.
In message queue that callback function waits until execution stack is empty

*/

/*

function callbackHell() {
    setTimeout(() => {
        console.log('Prvi callback');
        let arr = [2,4,6,8];
        console.log(arr);
        setTimeout((id) => {
            console.log('Informacije o tom clanu niza:');
            let obj =  {
                firstname: 'Dusan',
                lastname: 'Ruzic',
                age: 23,
                id: arr[2]
            };
            console.log(`${obj.firstname} ${obj.lastname} with id ${obj.id} is ${obj.age} years old`);
            setTimeout((obj) => {
                console.log('Treci callback: Info o objektu:');
                console.log(obj);
            }, 1500, obj);
            console.log('Posle treceg callbacka');
         }, 1500, arr[2]);
         console.log('posle drugog callbacka');

    }, 1500);
    console.log('posle prvog callback-a');

}

callbackHell();

*/


/*
PROMISE - An object that keeps track about whether a certain event has happened already or not
States of promise:
    1) PENDING - before an event has happened
    2)SETTLED / RESOLVED - after an event has happened
    3a) if promise is successful (result is available), promise is FULLFILED
    3b) if there was an error, promise is REJECTED

    Producing and consuming promises:
*/
//we pass a function called EXECUTOR FUNCTION (takes 2 arguments), that is immediately called when promise is created. Resolve and reject are 2 callback functions, that inform  the promise if event was successful or not
//if event was successful, we gonna call the resolve functions, instead we call reject callback function
//resolve function makes promise FULLFILED and returns data
    const getIDs = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([523, 883, 432, 974]);
        }, 1500);
    });

    const getRecipe = recID => {
        return new Promise((resolve, reject) => {
            setTimeout(ID => {
                const recipe = {title: 'Fresh tomato pasta',
                publisher: 'Dule'};
                resolve (`${ID}: ${recipe.title}`)                
            }, 1500, recID);

        });
    };

    const getRelated = publisher => {
        return new Promise((resolve, reject) =>{
            setTimeout((pub) => {
                const recipe = {title: 'Italian Pizza',
            publisher: 'Dule'};
            resolve(`${pub}: ${recipe.title}`);
            }, 1500, publisher);
        });
    };

//here we consume our promise with 2 methods: then and catch. All Promise objects inherits that 2 methods

//we pass callback function, which will handle fullfuled object and what to do when promise is successfull
//argument of callback function will be a result of the successful promise


/*
getIDs
.then(IDs => {
    console.log(IDs);
    return  getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Dule' )
})
.then(recipe => {
    console.log(recipe);
} )
.catch(error => {
    console.log(error); 
});
*/


/*
ASYNC/AWAIT - new in ES6
design to CONSUME promises
first step with producing promises stay the same, difference is in CONSUMING
*/

//in async function, we can have 1 or more await expressionseturns resolved val
//await will stop the code from executing until the promise is fullfiled and it rue 


//ASYNC FUNCTIONS WILL EXECUTE IN BACKGROUND, BECAUSE WE CAN NEVER MAIN CODE STOPPING
async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('Dusan Ruzic');
    console.log(related);

    return recipe;
}

//we can not get a result from async functions in this way, synchronous way, because here we have not value from result.
const a = getRecipesAW();
console.log(a);

//instead, we use then() to get value
//async function will always return promise, that we can consume. That is the reason why we can use callback then() here

getRecipesAW().then(result => console.log(`${result} is the best with asyncronous`));