import './HistoryPage.css'
import HistoryEntry from '../HistoryEntry/HistoryEntry'
import Navigation from '../Navigation/Navigation'

export default function HistoryPage() {
  return (
    <div className="HistoryPage">
      <HistoryEntry nameOfGame="Carcassonne" name="John Doe" score="20" />
      <Navigation
        pages={['Play', 'History']}
        activeIndex={1}
        onNavigate={index => console.log(index)}
      />
    </div>
  )
}
