import Button from './Button'
import Header from './Header'
import Player from './Player'
import styled from 'styled-components'

export default function Gamepage(
  nameOfGame,
  players,
  onPlus,
  onMinus,
  onReset,
  onEnd
) {
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <ButtonGrid>
        <Button onClick={onReset}>Reset scores</Button>
        <Button onClick={onEnd}>End game</Button>
      </ButtonGrid>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 10px;
`

const ButtonGrid = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 40px;
`
