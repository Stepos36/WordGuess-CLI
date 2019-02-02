var Word = require('./word.js');
var inquirer = require('inquirer');
var wordBank = ['Hello', 'Goodbye'];
var randNum;
var unknownWord;
var unknownWordLetters;

var pickWord = function(){
    randNum = Math.floor(Math.random() * wordBank.length);
    unknownWord = wordBank[randNum];
    unknownWordLetters = new Word(unknownWord)
    startGame()
}
function startGame() {
    if((unknownWordLetters.returnWord()!=unknownWord.toLowerCase())&&(unknownWordLetters.attempts>0)) {
        console.log(unknownWordLetters.returnWord()+'\n'
        +'You have '+unknownWordLetters.attempts+' attempts left');
        inquirer.prompt([
            {
                name: 'letter',
                message: 'Type your guess'
            }
        ]).then(function(response){
            unknownWordLetters.guess(response.letter);
            console.log(response.letter)
            console.log(unknownWordLetters.returnWord())
            console.log(unknownWord.toLowerCase())
            console.log(unknownWordLetters)
            startGame()
        });
    }
    else {
        endGame()
    }
}
function endGame() {
    if(unknownWordLetters.attempts>0){
        console.log('You won!');
    }
    else{
        console.log('You lost! Correct answer was: '+unknownWord)
    }
    pickWord()
}
pickWord()