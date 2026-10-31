import { useEffect, useState } from "react";

const ROLE = " Aspiring Full Stack Developer";

export default function Hero() {
  const [typed, setTyped] = useState("");

  // typing effect (skipped if the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(ROLE);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(ROLE.slice(0, i));
      if (i >= ROLE.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="orb o1" aria-hidden="true" />
      <div className="orb o2" aria-hidden="true" />
      <div className="orb o3" aria-hidden="true" />

      <div className="wrap hero-in">
        <div className="hero-text">
          <p className="hello">Hello, I'm Dinesh</p>
          <h1>
            <span className="grad">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </h1>
          <p className="lead">
            I enjoy building clean, useful digital experiences and turning ideas into
            working projects. I'm always learning, creating, and improving my
            development skills.
          </p>
          <div className="btns">
            <a href="#projects" className="btn primary">View My Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
            {/* Uses public/resume.pdf. Delete this line if you don't want the button. */}
            <a href="/resume.pdf" className="btn ghost" download>Download Resume</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="frame">
            <img src="/dinesh.png" alt="Portrait of Dinesh in a black suit" />
          </div>
          <div className="chip c1">HTML</div>
          <div className="chip c2">CSS</div>
          <div className="chip c3">Python</div>
          <div className="chip c4">C#</div>
        </div>
      </div>
    </section>
  );
}
