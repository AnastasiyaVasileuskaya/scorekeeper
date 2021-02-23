import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      <h3>{nameOfGame}</h3>
      {players.map((player, index) => (
        <div key={index} className="HistoryEntry__player">
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}
    </section>
  )
}
