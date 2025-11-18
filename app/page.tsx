import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-center text-center px-6 bg-white">
      <h1 className="text-3xl font-semibold max-w-lg leading-relaxed">
        Aqui, muito em breve, estará o portfólio de Gisele Sartini.
      </h1>

      <Image
        src="/images/gisele.jpg"
        alt="Foto de Gisele Sartini"
        width={280}
        height={280}
        className="rounded-full object-cover shadow-md"
        priority
      />
    </main>
  );
}
