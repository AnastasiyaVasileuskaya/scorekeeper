import './App.css'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'
import Header from '../Header/Header'

function App() {
  return (
    <div className="App">
      <Header title="Scorekeeper" />
      <PlayerForm onAddPlayer={name => console.log(name)} />
      <Player name="Jahn Doe" score="20" />
      <Player name="Jane Doe" score="30" />
      <Button text="Reset scores" />
      <Button text="Reset all" />
    </div>
  )
}

export default App
