import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label>
      {labelText}
      <Inputfield isActive name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
`

const Inputfield = styled.input`
  border: 2px solid #bbb;
`
