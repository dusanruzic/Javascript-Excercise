/*

console.log("povezan html sa js-om");
//alert("polozi ga Mico :)");

sestre = ["Slavica", "Svetlana", "Sladjana", "Snezana"]
console.log(sestre.length);
sestre[6] = "Dejana";
console.log(sestre);
console.log(sestre[5]);  //will print undefined

var dule = ["Dusan", 23, "FON"];

//methods of array:
dule.push("student");
dule.unshift("Ruzic");
console.log(dule);

dule.pop();
dule.shift();
console.log(dule);

*/

var john = {
    bils: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],
    izracunaj: function(){
        console.log(arguments);
        for(var i=0; i < this.bils.length; i++){
            if(this.bils[i] < 50){
                this.tips.push(this.bils[i]*0.2);
                this.finalPaid.push(this.bils[i]*1.2);
            } 
            else if(this.bils[i] > 50 && this.bils[i] < 200){
                this.tips.push(this.bils[i]*0.15);
                this.finalPaid.push(this.bils[i]*1.15);
            }
            else {
                this.tips.push(this.bils[i]*0.1);
                this.finalPaid.push(this.bils[i]*1.1);
            }
        }
    }

}

var mark = {
    bils: [77, 475, 110, 45],
    tips: [],
    finalPaid: [],
    izracunaj: function(){
        console.log(arguments);
        for(var i=0; i < this.bils.length; i++){
            if(this.bils[i] < 100){
                this.tips.push(this.bils[i]*0.2);
                this.finalPaid.push(this.bils[i]*1.2);
            } 
            else if(this.bils[i] > 100 && this.bils[i] < 300){
                this.tips.push(this.bils[i]*0.1);
                this.finalPaid.push(this.bils[i]*1.1);
            }
            else {
                this.tips.push(this.bils[i]*0.25);
                this.finalPaid.push(this.bils[i]*1.25);
            }
        }
    }

}

function averageTip(niz){
    suma = 0;
    for(var i=0; i<niz.length; i++){
        suma += niz[i];
    }
    return suma/niz.length;
}

console.log("Tips za John-a pre izracunavanja: " + john.tips);
console.log("Final paid za John-a pre izracunavanja: " + john.finalPaid);

john.izracunaj();
console.log("Tips za John-a posle izracunavanja: " + john.tips);
console.log("Final paid za John-a posle izracunavanja: " + john.finalPaid);

avgTipJohn = averageTip(john.tips);
console.log("John average tips: " + avgTipJohn);



console.log("Tips za Mark-a pre izracunavanja: " + mark.tips);
console.log("Final paid za Mark-a pre izracunavanja: " + mark.finalPaid);

mark.izracunaj();
console.log("Tips za Mark-a pre izracunavanja: " + mark.tips);
console.log("Final paid za Mark-a pre izracunavanja: " + mark.finalPaid);

avgTipMark = averageTip(mark.tips);
console.log("Mark average tips: " + avgTipMark);

if(avgTipJohn > avgTipMark){
    console.log("John usually gives more tips than Mark");
}
else if(avgTipJohn == avgTipMark){
    console.log("They usually give equal tips");
}
else console.log("Mark usually gives more tips than John");

console.log(john);
console.log(mark);