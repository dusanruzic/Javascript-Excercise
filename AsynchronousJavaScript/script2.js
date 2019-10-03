const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ([2,4,5,7]);
    }, 1500);
    
});

const getAllInfo = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({'ime':'Dusan'});
        }, 1500);
    });
};

async function aa() {
    console.log('aa');
    const rez = await getID;
    console.log(rez);

    const rez2 = await getAllInfo(121);
    console.log(rez2);
}

aa();

/*
FETCH - using for API, here we consuming promise, fetch returns a promise
*/

//1. way with then() and catch()
function getData(){
    fetch('http://api.football-data.org/v2/competitions')
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(data => {
        console.log(data);
    })
}

getData();

// 2. second (better) way with async/await
async function fetchFunctionAW () {
    try {
        //await return a promise and stop code . Code wait promise to return data or error
        const rez = await fetch('http://api.football-data.org/v2/competitions');
        console.log(rez);
        //.json() also return a promise
        const jsonFormat = await rez.json();
        //console.log(someDumpVariable);
        console.log(jsonFormat);
        return jsonFormat;
    } catch (error) {
        alert(error);
    }
    
}


//get result from the function
let dataLondon;
fetchFunctionAW().then(data => {
    dataLondon = data;
    console.log(dataLondon);
});

