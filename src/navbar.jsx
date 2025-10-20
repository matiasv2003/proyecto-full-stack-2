import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <header>
      <h1>Level-Up Gamer</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
        </ul>
      </nav>
    </header>
  )
}
