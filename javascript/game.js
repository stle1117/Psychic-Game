// random letter chosen by comp
var aplphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
var wins = 0
var guessesMade
var numGuessesLeft
var randomIndex
var computerChosenLetter

function startNewGame(){
    guessesMade = []
    numGuessesLeft = 10
    randomIndex = Math.floor(Math.random() * 26)
    computerChosenLetter = aplphabet[randomIndex]
    console.log(computerChosenLetter);
    document.getElementById('wins').innerHTML = wins
    document.getElementById('num-guesses-left').innerHTML = numGuessesLeft
    document.getElementById('guesses-made').innerHTML = guessesMade
}

startNewGame()

// user key press 
document.addEventListener('keypress', function(event){
    var key = event.key
    // check against random letter
    if(key === computerChosenLetter || numGuessesLeft === 0){
        alert('you are right!')
        wins++
        document.getElementById('wins').innerHTML = wins
        startNewGame()
        
    } else {
        alert('you are wrong!')
        numGuessesLeft--
        guessesMade.push(key)
    }
    document.getElementById('guesses-made').innerHTML = guessesMade
    document.getElementById('num-guesses-left').innerHTML = numGuessesLeft
})

