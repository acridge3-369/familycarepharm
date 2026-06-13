import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/walkthrough', label: 'Walkthrough' },
  { to: '/prescriptions', label: 'Prescriptions' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoVisible, setLogoVisible] = useState(true)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-logo-slot">
            {logoVisible && (
              <img
                src="/images/logo.png"
                alt=""
                className="brand-logo"
                onError={() => setLogoVisible(false)}
              />
            )}
          </span>
          <span className="brand-name">Family Care Pharmacy</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <a href={`tel:${PHONE_TEL}`} className="header-phone">
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
