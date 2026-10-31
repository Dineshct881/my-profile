import Reveal from "./Reveal";

const EDUCATION = [
  {
    title: "Diploma in Computer Engineering",
    college: "Sakthi Polytechnic College",
    years: "2022–2024",
    status: "Completed",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    college: "Sri Vasavi College",
    years: "",
    status: "Currently Studying",
  },
];

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="wrap narrow">
        <h2>Education</h2>
        <ol className="timeline">
          {EDUCATION.map((e, i) => (
            <li key={e.title}>
              <Reveal delay={i * 120} className="card">
                <h3>{e.title}</h3>
                <p>{e.college}</p>
                {e.years && <p className="muted">{e.years}</p>}
                <span className="badge">{e.status}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
