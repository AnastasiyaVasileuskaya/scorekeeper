import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props =>
    props.isActive ? 'cornflowerblue' : 'lightgrey'};
  color: ${props => (props.isActive ? 'white' : 'black')};
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: inherit;
  text-align: center;

  &.active {
    background-color: cornflowerblue;
    color: white;
  }
`
