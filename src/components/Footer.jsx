import Icon from "./Icon";
import { CONTACT } from "./Contact";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <p>Designed and Built by Dinesh </p>
        <div className="social">
          <a href={CONTACT.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Icon name="github" /></a>
          <a href={CONTACT.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin" /></a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email"><Icon name="mail" /></a>
        </div>
        <button className="btn ghost" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
        </button>
      </div>
    </footer>
  );
}
