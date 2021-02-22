import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, name, score }) {
  return (
    <div className="HistoryEntry">
      <h3>{nameOfGame}</h3> <br />
      {name} <span className="score">{score}</span>
    </div>
  )
}
