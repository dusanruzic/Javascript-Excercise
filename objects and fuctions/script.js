//IIFE 
(function () {
    //function constructor
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ": " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;

        if(ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        }
        else {
            console.log('You are wrong! Try again :)');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' +  score);
        console.log('---------------------------------------------------');

    }

   

    var q1 = new Question('Is Javascript the coolest programming language?', ['Yes', 'No'], 0);
    var q2 = new Question('What is my name?', ['Milan', 'Dusan', 'Janko'], 1);
    var q3 = new Question('What does best describing coding?', ['Boring', 'Hard', 'Fun'], 2);

    var questions = [q1, q2, q3];


    //closures, solution is that inner function is callback function in checkAnswer function
    //we defined score in score function and we have inner function, which change that score in every callback in checkAnswer function
    function score() {
        var sc = 0;
        return function(correct){
            if(correct) {
                sc ++;
            }
            return sc;
        }
    }

    var keepScore = score();


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer');

        

        if(answer !== 'exit'){
            console.log(keepScore);
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }

        
    }
    nextQuestion();
    
})();
