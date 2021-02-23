import './App.css'
import Playpage from '../Playpage/Playpage'
import GamePage from '../GamePage/GamePage'
import HistoryPage from '../HistoryPage/HistoryPage'
import { useState } from 'react'

function App() {
  const [game, setGame] = useState(null)
  function handleSubmit(nameOfGame, playerGames) {
    /*let players = playerGames.split(',')
    console.log(nameOfGame, players)*/
    let game = {}
    game.name = nameOfGame
    game.players = playerGames
    setGame(game)
  }

  return (
    <div className="App">
      <Playpage handleSubmit={handleSubmit} />
      <GamePage game={game} />
      <HistoryPage />
    </div>
  )
}

export default App
