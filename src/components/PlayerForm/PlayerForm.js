import './PlayerForm.css'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <div className="PlayerForm">
      <label className="label">
        Add player:
        <input placeholder="Player name" onChange={onAddPlayer} />
      </label>
    </div>
  )
}
