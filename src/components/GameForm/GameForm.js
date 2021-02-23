import './GameForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input
        labelText="Name of game:"
        placeholderText="e.g. Carcassonne"
        name="gameName"
      />
      <Input
        labelText="Player names:"
        placeholderText="e.g. John Doe, Jane Doe"
        name="playerNames"
      />
      <Button text="Create game" type="submit" />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const inputGameName = form.elements.gameName
    const inputPlayerNames = form.elements.playerNames
    onCreateGame(inputGameName.value, inputPlayerNames.value)
    form.reset()
    inputGameName.focus()
  }
}
