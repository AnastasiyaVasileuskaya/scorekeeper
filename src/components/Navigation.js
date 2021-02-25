import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <Nav>
      <Button
        isActive={currentPage === 'create'}
        onClick={() => onNavigate('create')}
      >
        Play
      </Button>
      <Button
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`
