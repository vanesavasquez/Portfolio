import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

const projectsData = {
  'nebula-os-framework': {
    title: 'Nebula OS Framework',
    description:
      'A comprehensive multi-platform design system built for scalability, featuring over 200 components and a custom cinematic motion library.',
    screens: ['Flow mobile', 'Flow web', 'Transfer', 'Universidad', 'Portal'],
  },
  'fintech-onboarding': {
    title: 'Fintech Onboarding',
    description:
      'Reducing friction in complex digital banking identity verification through iterative testing.',
    screens: ['Splash', 'Sign Up', 'Verification', 'Dashboard'],
  },
  'the-workspace-experiment': {
    title: 'The Workspace Experiment',
    description:
      'Exploring how physical motion affects digital navigation. A series of interactive prototypes using gesture sensors.',
    screens: ['Concept', 'Prototype', 'Testing'],
  },
  'aura-real-estate': {
    title: 'Aura Real Estate',
    description:
      'End-to-end product design for a premium property portal specializing in architectural landmarks.',
    screens: ['Home', 'Search', 'Property Detail', 'Map View'],
  },
  'laboratorio-bago': {
    title: 'Laboratorio Bagó',
    description:
      'Investigación UX y diseño de interfaces para plataforma de laboratorio farmacéutico.',
    screens: ['Flow mobile', 'Flow web', 'Transfer', 'Universidad', 'Portal'],
  },
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug]

  if (!project) {
    return (
      <div className="project-detail page">
        <div className="container">
          <Link to="/proyectos" className="project-detail__back">
            ← Volver a Proyectos
          </Link>
          <h1 className="project-detail__title">Proyecto no encontrado</h1>
          <p className="project-detail__desc">
            El proyecto que buscás no existe. Volvé a la lista de proyectos.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail page">
      <div className="container">
        {/* ── Back link ── */}
        <Link to="/proyectos" className="project-detail__back">
          ← Volver a Proyectos
        </Link>

        {/* ── Header ── */}
        <div className="project-detail__header">
          <div className="project-detail__logo">Logo</div>
          <div className="project-detail__info">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__desc">{project.description}</p>
          </div>
        </div>

        {/* ── Hero Image ── */}
        <div className="project-detail__hero-img">
          Imagen portada del proyecto
        </div>

        {/* ── Description blocks ── */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Descripción del proyecto</h2>
          <p className="project-detail__text-block">
            {project.description}
          </p>
          <p className="project-detail__text-block">
            Especialista en UX con más de 5 años de experiencia transformando datos en decisiones de producto.
            Experta en liderar procesos de Discovery y validación en entornos complejos (B2B, B2E).
            Domina metodologías cualitativas y cuantitativas (lean UX) para crear experiencias centradas en
            el usuario. Habilidad para orquestar procesos de research.
          </p>
        </div>

        {/* ── Screens Gallery ── */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Pantallas del producto</h2>
          <div className="project-detail__screens">
            {project.screens.map(screen => (
              <div key={screen} className="project-detail__screen">
                <span>📱</span>
                {screen}
              </div>
            ))}
          </div>
        </div>

        {/* ── Full width image ── */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Diseño completo</h2>
          <div className="project-detail__full-img">
            Imagen portada del diseño sistema
          </div>
        </div>

        {/* ── Architecture image ── */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Arquitectura</h2>
          <div className="project-detail__full-img">
            Imagen del armado de la arquitectura
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
