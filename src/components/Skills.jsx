import Reveal from "./Reveal";

const SKILLS = [
  { icon: "</>", name: "HTML", text: "Web page structure" },
  { icon: "{ }", name: "CSS", text: "Website styling and responsive design" },
  { icon: "Py", name: "Python", text: "Programming and problem-solving" },
  { icon: "C", name: "C", text: "Basic programming and logic" },
  { icon: "C#", name: "C#", text: "Application development" },
  { icon: "DB", name: "MySQL", text: "Database management" },
];

const SERVICES = [
  { icon: "</>", title: "Frontend Web Development" },
  { icon: "Py", title: "Programming and Problem Solving" },
  { icon: "DB", title: "Database Management" },
];

// This file holds both the "Technical skills" and the "What I do" sections.
export default function Skills() {
  return (
    <>
      <section id="skills" className="section">
        <div className="wrap">
          <h2>Technical skills</h2>
          <div className="grid g3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.name} delay={i * 70} className="card skill">
                <div className="ico">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="what-i-do">
        <div className="wrap">
          <h2 id="what-i-do">What I do</h2>
          <div className="grid g3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="card skill">
                <div className="ico">{s.icon}</div>
                <h3>{s.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
