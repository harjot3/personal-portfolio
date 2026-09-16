import { profile, projects, experience } from "./content";

export default function App() {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="blurb">{profile.blurb}</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>{profile.blurb}</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {projects.length === 0 ? (
            <p className="empty">Projects coming soon.</p>
          ) : (
            <ul className="list">
              {projects.map((p) => (
                <li key={p.title}>
                  <div className="item-head">
                    <h3>
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noreferrer">
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <span className="period">{p.period}</span>
                  </div>
                  <p>{p.description}</p>
                  <p className="tags">{p.tags.join(" · ")}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section id="experience">
          <h2>Experience</h2>
          {experience.length === 0 ? (
            <p className="empty">Experience coming soon.</p>
          ) : (
            <ul className="list">
              {experience.map((e) => (
                <li key={e.role + e.org}>
                  <div className="item-head">
                    <h3>
                      {e.role} — {e.org}
                    </h3>
                    <span className="period">{e.period}</span>
                  </div>
                  <p>{e.description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer id="contact">
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </p>
      </footer>
    </>
  );
}
