import { Link } from 'react-router-dom'
import './Projects.css'

const categories = [
  'Laboratorio Bagó',
  'Disprofarma',
  'Lift Agora',
  'Mega Agritech',
  'Bahre assets',
  'Mercados online',
  'Mar del plata',
  'Consultora',
]

const projects = [
  {
    slug: 'nebula-os-framework',
    title: 'Nebula OS Framework',
    category: 'Design System',
    description:
      'A comprehensive multi-platform design system built for scalability, featuring over 200 components and a custom cinematic motion library.',
    size: 'large',
  },
  {
    slug: 'fintech-onboarding',
    title: 'Fintech Onboarding',
    category: 'UX Research',
    description:
      'Reducing friction in complex digital banking identity verification through iterative testing.',
    size: 'medium',
  },
  {
    slug: 'the-workspace-experiment',
    title: 'The Workspace Experiment',
    category: 'WIP / 2024',
    description:
      'Exploring how physical motion affects digital navigation. A series of interactive prototypes using gesture sensors.',
    size: 'feature',
    isFeature: true,
  },
  {
    slug: 'aura-real-estate',
    title: 'Aura Real Estate',
    category: 'Web App',
    description:
      'End-to-end product design for a premium property portal specializing in architectural landmarks.',
    size: 'wide',
  },
  {
    slug: 'laboratorio-bago',
    title: 'Laboratorio Bagó',
    category: 'Laboratorio Bagó',
    description:
      'Investigación UX y diseño de interfaces para plataforma de laboratorio farmacéutico.',
    size: 'square',
  },
]

function Projects() {
  return (
    <div className="projects page">
      <div className="container">
        {/* ── Header ── */}
        <div className="projects__header">
          <h1 className="projects__title">
            Proyectos<span>.</span>
          </h1>
          <p className="projects__subtitle">
            Curated selection of digital experiences, design systems, and product
            research. High-contrast solutions for complex problems.
          </p>
        </div>

        {/* ── Category Tags ── */}
        <div className="projects__tags">
          {categories.map((cat, i) => (
            <span key={cat} className={`tag${i === 0 ? ' tag--active' : ''}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* ── Bento Grid ── */}
        <div className="projects__bento">
          {projects.map(project => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className={`project-card project-card--${project.size}${project.isFeature ? ' project-card--feature' : ''}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project-card__img">
                Imagen del proyecto
              </div>
              <div className="project-card__body">
                <div className="project-card__category">{project.category}</div>
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__desc">{project.description}</p>
                <span className="project-card__cta">
                  Ver caso de estudio →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
