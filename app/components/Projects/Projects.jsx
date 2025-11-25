export default function Projects({ dictionary }) {
  return (
    <section id="projects">
      <h2>{dictionary.projects.title}</h2>
      <p>{dictionary.projects.text}</p>
    </section>
  );
}
