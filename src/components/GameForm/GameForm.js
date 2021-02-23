import './GameForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input
        labelText="Name of game:"
        placeholderText="e.g. Carcassonne"
        name="nameOfGame"
      />
      <Input
        labelText="Player names:"
        placeholderText="e.g. John Doe, Jane Doe"
        name="playerNames"
      />
      <Button text="Create game" />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}
