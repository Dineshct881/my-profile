import Reveal from "./Reveal";

// TODO: replace each "#" with the real project link and GitHub repository.
const PROJECTS = [
  {
    title: "Student Admission Form",
    text: "A structured admission form built with clean HTML and CSS.",
    tags: ["HTML", "CSS"],
    live: "#",
    repo: "https://github.com/Dineshct881/admission-form",
  },
  {
    title: "Personal Portfolio Website",
    text: "A personal website that introduces my work and skills.",
    tags: ["HTML", "CSS","REACT JS"],
    live: "#",
    repo: "#",
  },
  {
    title: "ShopKart-Inspired Demo Website",
    text: "A demo shopping website inspired by Flipkart's layout.",
    tags: ["HTML", "CSS"],
    live: "#",
    repo: "https://github.com/Dineshct881/shopkart",
  },
  {
    title: "Python Mini Projects",
    text: "A collection of small Python programs for practice and problem solving.",
    tags: ["Python"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2>Projects</h2>
        <div className="grid g2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="card project">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul className="tags" aria-label="Technologies">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="btns small">
                <a className="btn primary" href={p.live}>View Project</a>
                <a className="btn ghost" href={p.repo}>GitHub</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
