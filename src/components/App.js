import GameForm from './GameForm'
import Navigation from './Navigation'
import Header from './Header'
import HistoryEntry from './HistoryEntry'
import { useState } from 'react'
import Button from './Button'
import Player from './Player'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [players, setPlayers] = useState([])
  const [currentPage, setCurrentPage] = useState('play')
  const [nameOfGame, setNameOfGame] = useState('')
  const [history, setHistory] = useState([])

  return (
    <AppLayout>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={createGame} />
        </div>
      )}

      {currentPage === 'game' && (
        <div>
          <Header>{nameOfGame}</Header>
          {players.map(({ name, score }, index) => (
            <Player
              key={index}
              name={name}
              score={score}
              onPlus={() => handlePlus(index)}
              onMinus={() => handleMinus(index)}
            />
          ))}
          <Button onClick={resetScores}>Reset scores</Button>
          <Button onClick={endGame}>End game</Button>
        </div>
      )}

      {currentPage === 'history' && (
        <HistoryWrapper>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
          ))}
        </HistoryWrapper>
      )}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </AppLayout>
  )

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('play')
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
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
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
const HistoryWrapper = styled.div`
  display: grid;
  gap: 30px;
`
