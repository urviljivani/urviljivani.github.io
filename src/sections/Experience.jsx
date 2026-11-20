import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <h2 className="section-label">Experience</h2>
      <div className="exp-list">
        {experience.map((e, i) => (
          <a
            key={i}
            className="exp-item"
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="exp-period">{e.period}</span>
            <div className="exp-body">
              <h3 className="exp-title">
                {e.title} · {e.company} <span className="arrow">&#8599;</span>
              </h3>
              <p className="exp-desc">{e.description}</p>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
