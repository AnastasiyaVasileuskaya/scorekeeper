import './GamePage.css'
import Header from '../Header/Header'
import Player from '../Player/Player'
import Button from '../Button/Button'

export default function GamePage({ game }) {
  if (game === null) {
    return null
  }
  return (
    <div className="GamePage">
      <Header title={game.name} />
      <Player
        name={game.players}
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
