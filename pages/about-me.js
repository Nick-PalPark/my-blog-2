import Image from 'next/image';

export default function AboutMe() {
  return (
    <main style={{ maxWidth: 700, margin: 'auto', padding: 32 }}>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/me.jpg"
          alt="Your Name"
          width={120}
          height={120}
          style={{ borderRadius: '50%' }}
        />
        <h1>Your Name</h1>
        <p>
          Welcome to my blog! I'm a [your profession/hobby], passionate about [your interests].
        </p>
      </div>
      <section style={{ marginTop: 32 }}>
        <h2>Find me elsewhere</h2>
        <ul>
          <li><a href="https://twitter.com/yourhandle">Twitter</a></li>
          <li><a href="https://github.com/yourhandle">GitHub</a></li>
          <li><a href="mailto:you@example.com">Email</a></li>
        </ul>
      </section>
      <section style={{ marginTop: 32 }}>
        <h2>Projects</h2>
        <ul>
          <li><a href="/project-1">Project One</a> – Short description.</li>
          <li><a href="/project-2">Project Two</a> – Short description.</li>
        </ul>
      </section>
    </main>
  );
}
