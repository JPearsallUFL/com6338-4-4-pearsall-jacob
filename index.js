var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var wordToGuess = document.getElementById("word-to-guess")
var previousWord = document.getElementById('previous-word')
var incorretLetters = document.getElementById('incorrect-letters')
var remaining = document.getElementById('remaining-guesses')
var losses = document.getElementById('losses')
var wins = document.getElementById('wins')

//select random word from list
var word = words[Math.floor(Math.random() * words.length)]

//set remaining guesses
var remainingGuesses = 10
remaining.innerHTML = remainingGuesses

//Show underscores for current word
var correctLetters = []
for (var i = 0; i < word.length; i++){
  correctLetters[i] = "_"
}
wordToGuess.innerHTML = correctLetters.join("")

document.onkeyup = function(e){
  var key = e.key.toLowerCase()
  
  if (word.indexOf(key) == -1) {
    incorretLetters.innerHTML += key
    remainingGuesses--
    remaining.innerHTML = remainingGuesses
  } else {
    for (var i = 0; i < word.length; i++){
      if(word[i] == key){
        correctLetters[i] = key
      }
    }
    wordToGuess.innerHTML = correctLetters.join("")
  }
  
  if (remainingGuesses == 0){
    newGame()
    losses.innerHTML ++
  }
  
  if (correctLetters.join("") == word){
    newGame()
    wins.innerText ++
  }
}


function newGame(){
  previousWord.innerHTML = word
  word = words[Math.floor(Math.random() * words.length)]
  remainingGuesses = 10
  remaining.innerHTML = remainingGuesses
  incorretLetters.innerHTML = ""
  correctLetters.length = 0
  for (var i = 0; i < word.length; i++){
    correctLetters[i] = "_"
  }
  wordToGuess.innerHTML = correctLetters.join("")

}