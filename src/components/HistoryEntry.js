import styled from 'styled-components'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <Section>
      <h3>{nameOfGame}</h3>
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
