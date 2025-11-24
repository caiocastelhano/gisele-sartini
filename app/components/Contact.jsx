export default function Contact({ dictionary }) {
  return (
    <section id="contact">
      <h2>{dictionary.contact.title}</h2>
      <p>{dictionary.contact.text}</p>
    </section>
  );
}
