var Word = require('./word.js');
var inquirer = require('inquirer');
var colors = require('colors');
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
    var comparsionWord = unknownWordLetters.returnWord().replace(/ /g, '')
    if((comparsionWord!=unknownWord.toLowerCase())&&(unknownWordLetters.attempts>0)) {
        console.log('========================================='.rainbow+'\n'
        +unknownWordLetters.returnWord()+'\n'+'========================================='.rainbow+'\n'
        +'You have '+unknownWordLetters.attempts+' attempts left'+'\n');
        inquirer.prompt([
            {
                name: 'letter',
                message: 'Type your guess'
            }
        ]).then(function(response){
            unknownWordLetters.guess(response.letter);
            startGame()
        });
    }
    else {
        endGame()
    }
}
function endGame() {
    if(unknownWordLetters.attempts>0){
        console.log('\n'+'Congratulations! You won!'.bgCyan+'\n');
    }
    else{
        console.log('You lost! Correct answer was: '+unknownWord+'\n')
    }
    pickWord()
}
pickWord()