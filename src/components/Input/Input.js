import './Input.css'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <label className="Input">
      {labelText}
      <input name={name} placeholder={placeholderText} type="text" />
    </label>
  )
}
