import { profile, education, experience, projects, skills } from "./content";

export default function App() {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="blurb">{profile.blurb}</p>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="item-head">
            <h3>{education.school}</h3>
            <span className="period">{education.period}</span>
          </div>
          <p className="sub">
            {education.degree} · {education.location}
          </p>
          <p className="tags">Coursework: {education.coursework}</p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul className="list">
            {experience.map((e) => (
              <li key={e.role + e.org}>
                <div className="item-head">
                  <h3>
                    {e.role} · {e.org}
                  </h3>
                  <span className="period">{e.period}</span>
                </div>
                <p className="sub">{e.location}</p>
                <ul className="bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul className="list">
            {projects.map((p) => (
              <li key={p.title}>
                <div className="item-head">
                  <h3>
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  </h3>
                </div>
                <p className="tags">{p.stack}</p>
                <ul className="bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="list">
            {skills.map((s) => (
              <li key={s.label}>
                <div className="item-head">
                  <h3>{s.label}</h3>
                </div>
                <p className="sub">{s.items}</p>
              </li>
            ))}
          </ul>
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
