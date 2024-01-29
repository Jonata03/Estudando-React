//css
import './App.css';

//react
import {useCallback, useEffect, useState} from "react"

//data
import { wordslist } from './data/Word';

//componenents
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"end"},
  
]

function App() {
  const[gameStage, setGameStage] = useState(stages[0].name)
  const[words] = useState(wordslist)

  const[pickedWord, setPickedWord] = useState("")
  const[pickedCategory, setPickedCategory] = useState("")
  const[letters,setLatters] = useState([])

  const pickwordAndCategory = () => {
    //pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    console.log(category);
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return {word, category}
  }

  //starts the game
  const startGame = () => {
    //pick word and pick category
    const {word, category}=pickwordAndCategory();

    //create an array of letters
    let wordLatters = word.split('')
    wordLatters = wordLatters.map((l) => l.toLowerCase())

    setGameStage(stages[1].name);

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLatters(letters)
  }

  // process the latter input
  const verifyLatter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLatter={verifyLatter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
