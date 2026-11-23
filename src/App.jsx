import { useState, useEffect, useCallback } from 'react'
import { profile, socials } from './data.js'
import { Icon } from './components/Icons.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Publications from './sections/Publications.jsx'

const sections = ['about', 'experience', 'projects', 'publications']

export default function App() {
  const [active, setActive] = useState('about')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleScroll = useCallback(() => {
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top < 200) {
        setActive(id)
        return
      }
    }
    setActive('about')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleMouse = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [])

  return (
    <>
      <div
        className="pointer-gradient"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
        onMouseMove={handleMouse}
      />
      <div className="layout" onMouseMove={handleMouse}>
        {/* Left sidebar */}
        <header className="sidebar">
          <div className="sidebar-top">
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <p className="tagline">{profile.tagline}</p>

            <nav className="sidebar-nav">
              {sections.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  className={active === s ? 'active' : ''}
                >
                  {s}
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebar-socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                <Icon name={s.icon} size={22} />
              </a>
            ))}
          </div>
        </header>

        {/* Right content */}
        <main className="content">
          <About />
          <Experience />
          <Projects />
          <Publications />

          <footer className="footer">
            <p>
              Loosely designed in{' '}
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a>{' '}
              and coded in{' '}
              <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>.{' '}
              Built with{' '}
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>{' '}
              and{' '}
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>,{' '}
              deployed with{' '}
              <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.{' '}
              All text is set in the{' '}
              <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a>{' '}
              typeface.
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
