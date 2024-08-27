import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="header-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="wave-image"
          />
          <h1 className="wave-heading">Wave</h1>
        </div>
        <ul className="ul-list-container">
          <li className="list-heading">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="list-heading">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="list-heading">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
