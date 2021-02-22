import './GamePage.css'
import Header from '../Header/Header'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'

export default function GamePage() {
  return (
    <div className="GamePage">
      <Header title="Carcassonne" />
      <PlayerForm onAddPlayer={name => console.log(name)} />
      <Player
        name="Jahn Doe"
        score="20"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />
      <Player
        name="Jane Doe"
        score="30"
        onPlus={() => console.log('onPlus')}
        onMinus={() => console.log('onMinus')}
      />
      <Button text="Reset scores" onClick={() => console.log('Reset scores')} />
      <Button text="End game" onClick={() => console.log('Reset scores')} />
    </div>
  )
}
