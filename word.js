var Letter = require('./letter.js');
var Word = function(word) {
    this.attempts = 8
    this.letterArr = [];
    this.wordLettersArr = word.split('');
    for (i=0;i<this.wordLettersArr.length;i++){
        var newLetter = new Letter(this.wordLettersArr[i]);
        this.letterArr.push(newLetter)
    }
    this.returnWord = function() {
        var string='';
        for(j=0;j<this.letterArr.length;j++){
            string += this.letterArr[j].response();
        }
        return string
    }
    this.guess = function(userGuess){
        var status = false
        for(k=0;k<this.letterArr.length;k++){
            if(!this.letterArr[k].guessed){
                this.letterArr[k].checkLetter(userGuess);
                if(this.letterArr[k].guessed){
                    status = true;
                }
            }
        }
        if(status){
            console.log('\n'+'Correct guess! Keep going'.green)
        }
        else{
            console.log('\n'+'Wrong! Try something else'.red)
            this.attempts--
        }
    }
}
module.exports = Word