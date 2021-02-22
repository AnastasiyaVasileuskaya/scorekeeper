import './Navigation.css'

export default function Navigation({ activeIndex, onNavigate, pages }) {
  return (
    <nav className="Navigation">
      {pages.map((page, index) => (
        <button
          key={page}
          disabled={index === activeIndex}
          onClick={() => onNavigate(index)}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
