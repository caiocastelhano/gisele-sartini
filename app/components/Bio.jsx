export default function Bio({ dictionary }) {
  return (
    <section id="bio">
      <h2>{dictionary.bio.title}</h2>
      <p>{dictionary.bio.text}</p>
    </section>
  );
}
