import './Navigation.css'
import Button from '../Button/Button'

export default function Navigation({ activeIndex, onNavigate }) {
  return (
    <nav className="Navigation">
      <Button
        isActive={activeIndex === 0}
        text="Play"
        onClick={() => onNavigate(0)}
      />
      <Button
        isActive={activeIndex === 1}
        text="History"
        onClick={() => onNavigate(1)}
      />
    </nav>
  )
}
