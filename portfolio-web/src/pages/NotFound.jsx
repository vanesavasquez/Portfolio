import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: 'var(--sp-xl)',
    }}>
      <div style={{
        fontSize: 'clamp(5rem, 15vw, 10rem)',
        fontWeight: 700,
        lineHeight: 1,
        color: 'var(--color-primary)',
        letterSpacing: '-0.04em',
        opacity: 0.3,
      }}>
        404
      </div>
      <h1 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 700,
        marginBottom: 'var(--sp-md)',
        letterSpacing: '-0.02em',
      }}>
        Página no encontrada
      </h1>
      <p style={{
        fontSize: '1rem',
        color: 'var(--color-text-muted)',
        fontWeight: 300,
        maxWidth: '400px',
        marginBottom: 'var(--sp-lg)',
        lineHeight: 1.7,
      }}>
        La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando.
      </p>
      <Link to="/" className="btn btn--primary">
        ← Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
