import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <h2 className="section-label">Projects</h2>
      <div className="proj-list">
        {projects.map((p, i) => (
          <a
            key={i}
            className="proj-item"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h3 className="proj-title">
                {p.title} <span className="arrow">&#8599;</span>
              </h3>
              <p className="proj-desc">{p.description}</p>
              {p.stars && (
                <p className="proj-stars">&#9733; {p.stars}</p>
              )}
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="scholar-cta">
        <a
          href="https://scholar.google.com/citations?user=F1YFZ2gAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Publication List on Google Scholar{' '}
          <span className="arrow">&#8599;</span>
        </a>
      </div>
    </section>
  )
}
