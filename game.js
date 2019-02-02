var Word = require('./word.js');
var inquirer = require('inquirer');
var colors = require('colors');
var wordBank = [    "Alaska", 
                    "Alabama", 
                    "Arkansas", 
                    "American Samoa", 
                    "Arizona", 
                    "California", 
                    "Colorado", 
                    "Connecticut", 
                    "District of Columbia", 
                    "Delaware", 
                    "Florida", 
                    "Georgia", 
                    "Guam", 
                    "Hawaii", 
                    "Iowa", 
                    "Idaho", 
                    "Illinois", 
                    "Indiana", 
                    "Kansas", 
                    "Kentucky", 
                    "Louisiana", 
                    "Massachusetts", 
                    "Maryland", 
                    "Maine", 
                    "Michigan", 
                    "Minnesota", 
                    "Missouri", 
                    "Mississippi", 
                    "Montana", 
                    "North Carolina", 
                    "North Dakota", 
                    "Nebraska", 
                    "New Hampshire", 
                    "New Jersey", 
                    "New Mexico", 
                    "Nevada", 
                    "New York", 
                    "Ohio", 
                    "Oklahoma", 
                    "Oregon", 
                    "Pennsylvania", 
                    "Puerto Rico", 
                    "Rhode Island", 
                    "South Carolina", 
                    "South Dakota", 
                    "Tennessee", 
                    "Texas", 
                    "Utah", 
                    "Virginia", 
                    "Virgin Islands", 
                    "Vermont", 
                    "Washington", 
                    "Wisconsin", 
                    "West Virginia", 
                    "Wyoming"];
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
    var comparisonWord = unknownWordLetters.returnWord().replace(/ /g, '')
    if((comparisonWord!=unknownWord.toLowerCase())&&(unknownWordLetters.attempts>0)) {
        console.log('========================================='.rainbow+'\n'
        +unknownWordLetters.returnWord()+'\n'+'========================================='.rainbow+'\n'
        +'You have '+unknownWordLetters.attempts+' attempts left'+'\n');
        inquirer.prompt([
            {
                type: 'input',
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
        console.log('You lost! Correct answer was: '.bgRed+unknownWord+'\n')
    }
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you want to play again?'
        }
    ]).then(function(response){
        if(response.continue){
            pickWord()
        }
        else{

        }
    })

    
}
pickWord()