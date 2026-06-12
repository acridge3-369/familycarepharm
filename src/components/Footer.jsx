import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">Family Care Pharmacy</p>
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/refill-prescription">Refill</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Family Care Pharmacy</p>
      </div>
    </footer>
  )
}

export default Footer
