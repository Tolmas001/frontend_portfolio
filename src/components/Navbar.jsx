import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'glass' : ''} style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: scrolled ? '90%' : '100%',
      maxWidth: '1200px',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 2rem',
      borderRadius: scrolled ? '100px' : '0',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div style={{
        fontSize: '1.25rem', fontWeight: '800',
        color: 'var(--text-primary)',
        cursor: 'default',
        letterSpacing: '-0.03em',
        background: 'var(--primary-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        T.PORTFOLIO
      </div>

      <ul className="nav-links" style={{ 
        display: 'flex', 
        gap: '2rem', 
        fontSize: '0.9rem', 
        fontWeight: '600' 
      }}>
        {[
          { href: '#home', label: t.nav.home },
          { href: '#about', label: t.nav.about },
          { href: '#skills', label: t.nav.skills },
          { href: '#projects', label: t.nav.projects },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{ 
              color: 'var(--text-secondary)',
              position: 'relative',
              padding: '0.5rem 0'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.textShadow = '0 0 10px rgba(79, 70, 229, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >{label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="glass"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            border: '1px solid var(--border-color)',
            cursor: 'pointer',
            transition: 'var(--transition)',
          }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <div className="lang-switcher glass" style={{ 
          padding: '2px', 
          borderRadius: '100px', 
          display: 'flex', 
          gap: '2px',
          border: '1px solid var(--border-color)'
        }}>
          {['uz', 'ru', 'en'].map((l) => (
            <button 
              key={l} 
              className={`lang-btn${lang === l ? ' active' : ''}`} 
              onClick={() => setLang(l)}
              style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                padding: '0.4rem 0.8rem',
                borderRadius: '100px',
                transition: 'all 0.3s ease',
                background: lang === l ? 'var(--primary-gradient)' : 'transparent',
                color: lang === l ? 'white' : 'var(--text-secondary)',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
          {t.nav.hire}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
