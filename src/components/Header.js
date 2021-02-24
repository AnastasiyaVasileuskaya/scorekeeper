import styled from 'styled-components'

export default function Header({ title }) {
  return (
    <Heading>
      <h1>{title}</h1>
    </Heading>
  )
}

const Heading = styled.header`
  padding: 12px;
  text-align: center;
`
