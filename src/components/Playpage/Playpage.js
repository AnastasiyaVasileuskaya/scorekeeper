import './Playpage.css'
import GameForm from '../GameForm/GameForm'
import Navigation from '../Navigation/Navigation'

export default function Playpage({ handleSubmit }) {
  return (
    <div className="Playpage">
      <GameForm onCreateGame={handleSubmit} />
      <Navigation
        pages={['Play', 'History']}
        activeIndex={0}
        onNavigate={index => console.log(index)}
      />
    </div>
  )
}
