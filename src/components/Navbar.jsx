import { useEffect, useState } from "react";

const NAV = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // highlight the link of the section currently on screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo">Dinesh<span></span></a>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`links ${open ? "open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className={active === n.toLowerCase() ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
