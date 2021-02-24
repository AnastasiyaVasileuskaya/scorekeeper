import Input from './Input'
import Button from './Button'
import styled from 'styled-components/macro'

export default function GameForm({ onCreateGame }) {
  return (
    <Form onSubmit={handleSubmit}>
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
      <Button>Create game</Button>
    </Form>
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

const Form = styled.form`
  display: grid;
  gap: 10px;
`
