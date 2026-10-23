import { profile, education, experience, projects, skills } from "./content";
import mangaImage from "../images/image copy.png";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="brand">
          <img src={mangaImage} width="32" height="32" alt="" />
          <span>{profile.name}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
          <h1 id="hero-title">{profile.name}<span className="title-period">.</span></h1>
          <p className="role">{profile.role}</p>
          <p className="blurb">{profile.blurb}</p>
          <a className="hero-link" href="#projects">Explore my work</a>
          </div>
          <figure className="manga-panel">
            <img src={mangaImage} width="474" height="474" alt="Luffy from One Piece, wearing a straw hat and a blue shirt" />
          </figure>
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
                <div className="story">
                  {e.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
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
              <li key={p.title} className="project-card">
                <div className="item-head">
                  <h3>
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {p.title}
                    </a>
                  </h3>
                </div>
                <p className="tags">{p.stack}</p>
                <div className="story">
                  {p.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
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
          <ul className="list skill-list">
            {skills.map((s) => (
              <li key={s.label}>
                <div className="item-head">
                  <h3>{s.label}</h3>
                </div>
                <ul className="skill-tags">{s.items.split(", ").map((item) => <li key={item}>{item}</li>)}</ul>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-heading"><h2>Contact</h2></div>
        {profile.email && (
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        )}
        <p className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </p>
        <p className="colophon"><span>{profile.name}</span><a href="#top">BACK TO TOP</a></p>
      </footer>
    </>
  );
}
