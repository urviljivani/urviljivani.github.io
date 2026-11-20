import { profile } from '../data.js'

export default function About() {
  return (
    <section className="section about" id="about">
      <h2 className="section-label">About</h2>
      {profile.about.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </section>
  )
}
