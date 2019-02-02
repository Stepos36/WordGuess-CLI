var Letter = require('./letter.js');
var Word = function(word) {
    this.letterArr = [];
    this.wordLettersArr = word.split('');
    for (i=0;i<this.wordLettersArr.length;i++){
        var newLetter = new Letter(this.wordLettersArr[i]);
        this.letterArr.push(newLetter)
    }
    this.returnWord = function() {
        var string;
        for(j=0;j<this.letterArr.length;j++){
            string += this.letterArr[j].checkLetter();
        }
        return string
    }
    this.guess = function(userGuess){
        var status = false
        for(k=0;k<this.letterArr.length;k++){
            if(this.letterArr[k].guessed=false){
                this.letterArr[k].guess(userGuess);
                if(this.letterArr[k].guessed=true){
                    status = true;
                }
            }
        }
    }
}
var firstWord = new Word('hello')
console.log(firstWord)
module.exports = Word