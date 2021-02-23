import './App.css'
import GameForm from '../GameForm/GameForm'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import HistoryEntry from '../HistoryEntry/HistoryEntry'
import { useState } from 'react'
import Button from '../Button/Button'
import Player from '../Player/Player'
import PlayerForm from '../PlayerForm/PlayerForm'

function App() {
  //const [game, setGame] = useState(null)
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onAddPlayer={handleAddPlayer} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
        />
      ))}

      <Button text="Reset scores" onClick={resetScore}></Button>
      <Button text="Reset all" onClick={resetAll}></Button>

      <GameForm onCreateGame={data => console.log('onCreateGame', data)} />
      <Navigation
        activeIndex={0}
        onNavigate={index => console.log('onNavigate', index)}
      />
      <Header text="Carcassonne" />
      <HistoryEntry
        nameOfGame="Carcassonne"
        players={[
          { name: 'Jahn Doe', score: 10 },
          { name: 'Jane Doe', score: 20 },
        ]}
      />
    </div>
  )

  function handleAddPlayer(name) {
    setPlayers(oldPlayers => [...oldPlayers, { name, score: 0 }])
  }

  function resetScore() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

  function handleMinus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const currentPlayer = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  /* function handleSubmit(nameOfGame, playerGames) {
    /*let players = playerGames.split(',')
    console.log(nameOfGame, players)
    let game = {}
    game.name = nameOfGame
    game.players = playerGames
    setGame(game)
  } 
  */
}

export default App
