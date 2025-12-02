import { cookies } from "next/headers";
import pt from "../dictionaries/pt";
import en from "../dictionaries/en";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default async function ProjectsPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value === "en" ? "en" : "pt";

  const dictionary = lang === "en" ? en : pt;

  return (
    <>
      <Navbar lang={lang} dictionary={dictionary} />

      <main
        id="projects-page"
        role="main"
        aria-labelledby="projects-heading"
        style={{ paddingTop: "80px" }}
      >
        <h1 id="projects-heading" className="visuallyHidden">
          {dictionary.projectsPage.title}
        </h1>
      </main>

      <Footer dictionary={dictionary} />
    </>
  );
}
