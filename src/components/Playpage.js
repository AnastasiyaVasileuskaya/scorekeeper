import GameForm from './GameForm'
import styled from 'styled-components/macro'

export default function Playpage({ onCreateGame }) {
  return (
    <Grid>
      <GameForm onCreateGame={onCreateGame} />
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 10px;
`
