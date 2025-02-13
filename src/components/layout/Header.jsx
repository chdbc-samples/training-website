import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-success text-white py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none d-flex align-items-center">
          <img 
            src="/images/european-hare-6121jpg.webp" 
            alt="Заєць" 
            className="rounded-circle me-2"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
          <span className="fs-4 fw-bold">Сайт про зайців</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={`nav-link text-white ${location.pathname === '/' ? 'fw-bold text-decoration-underline' : ''}`}>
            Головна
          </Link>
          <Link to="/morphology" className={`nav-link text-white ${location.pathname === '/morphology' ? 'fw-bold text-decoration-underline' : ''}`}>
            Морфологія
          </Link>
          <Link to="/nutrition" className={`nav-link text-white ${location.pathname === '/nutrition' ? 'fw-bold text-decoration-underline' : ''}`}>
            Харчування
          </Link>
          <Link to="/population" className={`nav-link text-white ${location.pathname === '/population' ? 'fw-bold text-decoration-underline' : ''}`}>
            Популяція
          </Link>
          <Link to="/photo" className={`nav-link text-white ${location.pathname === '/photo' ? 'fw-bold text-decoration-underline' : ''}`}>
            Фотогалерея
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;