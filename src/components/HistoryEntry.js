import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function HistoryEntry({
  nameOfGame,
  players,
  isNameALink = true,
}) {
  return (
    <Section>
      {isNameALink ? (
        <Link to={`/history/${nameOfGame}`}>{nameOfGame}</Link>
      ) : (
        nameOfGame
      )}
      {players.map((player, index) => (
        <Entryplayer key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </Entryplayer>
      ))}
    </Section>
  )
}

const Section = styled.section`
  display: grid;
  gap: 10px;
`
const Entryplayer = styled.div`
  display: flex;
  justify-content: space-between;
`
