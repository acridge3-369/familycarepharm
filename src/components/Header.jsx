import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/contact'
import { serviceMenuLinks } from '../constants/services'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoVisible, setLogoVisible] = useState(true)
  const location = useLocation()
  const servicesActive = location.pathname === '/services'

  const closeMenu = () => setMenuOpen(false)

  const refillsClass = ({ isActive }) =>
    isActive ? 'header-refills-btn active' : 'header-refills-btn'

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-start">
          <Link to="/" className="brand" onClick={closeMenu}>
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

          <NavLink to="/prescriptions" className={refillsClass} onClick={closeMenu}>
            Fill my prescriptions
          </NavLink>
          <NavLink
            to="/transfer-prescriptions"
            className={({ isActive }) =>
              isActive ? 'header-transfer-link active' : 'header-transfer-link'
            }
            onClick={closeMenu}
          >
            Transfer prescriptions
          </NavLink>
        </div>

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
          <NavLink
            to="/prescriptions"
            className={({ isActive }) =>
              isActive ? 'header-refills-btn header-refills-btn--menu active' : 'header-refills-btn header-refills-btn--menu'
            }
            onClick={closeMenu}
          >
            Fill my prescriptions
          </NavLink>
          <NavLink
            to="/transfer-prescriptions"
            className={({ isActive }) =>
              isActive
                ? 'header-transfer-link header-transfer-link--menu active'
                : 'header-transfer-link header-transfer-link--menu'
            }
            onClick={closeMenu}
          >
            Transfer prescriptions
          </NavLink>
          <div className="nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <div className="nav-dropdown">
              <NavLink
                to="/services"
                className={servicesActive ? 'nav-link nav-link--dropdown active' : 'nav-link nav-link--dropdown'}
                onClick={closeMenu}
              >
                Services
              </NavLink>
              <div className="nav-dropdown-menu" role="menu">
                {serviceMenuLinks.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <NavLink
              to="/walkthrough"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Walkthrough
            </NavLink>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
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
