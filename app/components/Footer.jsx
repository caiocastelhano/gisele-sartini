export default function Footer({ dictionary }) {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Gisele Sartini —{" "}
        {dictionary.footer.rights}{" "}
        {dictionary.footer.developed}{" "}
        <a
          href="https://caiocastelhano.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caio Castelhano
        </a>
      </p>
    </footer>
  );
}
