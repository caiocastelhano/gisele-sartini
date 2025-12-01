import Image from "next/image";

export default function Bio({ dictionary }) {
  const { bio } = dictionary;

  return (
    <section id="about">
      <div>
        <div>
          <Image
            src="/images/profile-image.jpg"
            alt={bio.alt}
            width={400}
            height={400}
            priority
          />
        </div>

        <div>
          <h2>{bio.title}</h2>
          {bio.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
