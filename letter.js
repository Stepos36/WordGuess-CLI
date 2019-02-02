var Letter = function(letter) {
    this.char = letter.toLowerCase();
    this.guessed = false
    this.response = function() {
        if (this.guessed) {
            return (this.char+' ');
        }
        else {
            return ('_'+' ');
        }
    }
    this.checkLetter = function(userGuess){
        if (userGuess.toLowerCase()==this.char){
            this.guessed = true
        }
    }
}
module.exports = Letter