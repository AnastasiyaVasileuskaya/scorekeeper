import './Player.css'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <div className="Player">
      <p>{name}</p>
      <p>
        <button onClick={onMinus}>-</button>
        {score}
        <button onClick={onPlus}>+</button>
      </p>
    </div>
  )
}
