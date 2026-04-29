import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home page home__canvas-bg">
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            {/* Bio Column */}
            <div className="hero__content">
              <span className="hero__badge">Based in Buenos Aires</span>

              <h1 className="hero__title">
                UX <span>Designer</span>
              </h1>

              <p className="hero__subtitle">
                Crafting digital experiences that feel human. Vanesa translates
                complex problems into elegant, user-centric canvases.
              </p>

              <div className="hero__cta-row">
                <Link to="/proyectos" className="btn btn--primary">
                  View Projects
                </Link>

                <div className="hero__avatar-group">
                  <div className="hero__avatar">
                    <div className="hero__img-placeholder" style={{ fontSize: '0.5rem', padding: '4px' }}>
                      Foto
                    </div>
                  </div>
                  <div className="hero__avatar-count">+12</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Column */}
            <div className="hero__visual">
              <div className="hero__img-wrapper">
                <div className="hero__img-placeholder">
                  Foto Profesional
                </div>
              </div>
              {/* Figma-style selection handles */}
              <div className="hero__handle hero__handle--tl"></div>
              <div className="hero__handle hero__handle--tr"></div>
              <div className="hero__handle hero__handle--bl"></div>
              <div className="hero__handle hero__handle--br"></div>
              {/* Annotation tag */}
              <div className="hero__frame-tag">Frame 01: Hero</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Notes Section ── */}
      <section className="sticky-notes container">
        <div className="sticky-note sticky-note--pink">
          <div className="sticky-note__divider"></div>
          <p className="sticky-note__text">
            Always iterate until it feels invisible.
          </p>
          <div className="sticky-note__pin">📌</div>
        </div>

        <div className="sticky-note sticky-note--lavender">
          <div className="sticky-note__divider"></div>
          <p className="sticky-note__text">
            User first. Always. Everything else is secondary.
          </p>
          <div className="sticky-note__pin">📌</div>
        </div>

        <div className="sticky-note sticky-note--gold">
          <div className="sticky-note__divider"></div>
          <p className="sticky-note__text">
            Simplify. Then simplify again.
          </p>
          <div className="sticky-note__pin">📌</div>
        </div>
      </section>
    </div>
  )
}

export default Home
