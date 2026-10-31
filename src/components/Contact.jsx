import { useState } from "react";
import Icon from "./Icon";

// TODO: replace these placeholders with your real details.
export const CONTACT = {
  email: "dineshct881@gmail.com",
  github: "https://github.com/Dineshct881",
  linkedin: "https://www.linkedin.com/in/dinesh-v-74a0582a6/",
};

const FIELDS = ["name", "email", "message"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Opens the visitor's email app addressed to you.
    // To receive messages directly instead, swap this for a service like Formspree.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section alt">
      <div className="wrap contact">
        <div>
          <h2>Contact me</h2>
          <p className="lead">Open to internships and entry-level opportunities.</p>
          <ul className="reach">
            <li><Icon name="mail" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><Icon name="github" /><a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub profile</a></li>
            <li><Icon name="linkedin" /><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a></li>
          </ul>
        </div>

        <form className="card form" onSubmit={onSubmit} noValidate>
          {FIELDS.map((f) => (
            <div className="field" key={f}>
              <label htmlFor={f}>{f[0].toUpperCase() + f.slice(1)}</label>
              {f === "message" ? (
                <textarea
                  id={f} name={f} rows="5" value={form[f]} onChange={onChange}
                  aria-invalid={!!errors[f]} aria-describedby={`${f}-err`}
                />
              ) : (
                <input
                  id={f} name={f} type={f === "email" ? "email" : "text"}
                  value={form[f]} onChange={onChange}
                  aria-invalid={!!errors[f]} aria-describedby={`${f}-err`}
                />
              )}
              <span id={`${f}-err`} className="err" role="alert">{errors[f]}</span>
            </div>
          ))}
          <button className="btn primary" type="submit">Send Message</button>
          {sent && <p className="ok" role="status">Opening your email app…</p>}
        </form>
      </div>
    </section>
  );
}
