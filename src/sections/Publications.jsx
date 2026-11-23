import { publications } from '../data.js'

export default function Publications() {
  return (
    <section className="section publications" id="publications">
      <h2 className="section-label">Publications</h2>
      <div className="exp-list">
        {publications.map((p) => (
          <a key={p.title} className="exp-item" href={p.url} target="_blank" rel="noopener noreferrer">
            <span className="exp-period">{p.year}</span>
            <div className="exp-body">
              <h3 className="exp-title">
                {p.title} <span className="arrow">&#8599;</span>
              </h3>
              <p className="exp-desc">{p.venue}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
