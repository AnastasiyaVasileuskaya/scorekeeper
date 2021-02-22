import './Input.css'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <label className="Input">
      {labelText} <br />
      <input name={name} placeholder={placeholderText} />
    </label>
  )
}
