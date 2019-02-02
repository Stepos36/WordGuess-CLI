var Letter = function(letter) {
    this.char = letter;
    this.guessed = false
    this.response = function() {
        if (this.guessed) {
            return this.char;
        }
        else {
            return '_';
        }
    }
    this.checkLetter = function(){
        if (userGuess.toLowerCase()===this.char){
            this.guessed = true
        }
    }
}
module.exports = Letter