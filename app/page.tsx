export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center px-6">
      <main className="w-full max-w-lg">
        <div className="animate-fade-up">
          <p className="font-mono text-sm tracking-widest text-muted uppercase">
            Product Engineer
          </p>

          <h1 className="mt-4 font-sans text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Manuel
            <br />
            Sahores
          </h1>
        </div>

        <div
          className="animate-fade-up mt-10 h-px w-16 bg-accent"
          style={{ animationDelay: "0.15s" }}
        />

        <section
          className="animate-fade-up mt-10 max-w-md space-y-4 font-sans text-base leading-relaxed text-muted"
          style={{ animationDelay: "0.3s" }}
        >
          <p>
            I&apos;m Manuel — a product engineer who&apos;s been building for
            the web for over 10 years.
          </p>
          <p>
            Worked with startups, agencies, and international clients. Built
            gaming platforms, Google ad platforms, club management tools,
            real-time apps, and a few things in between.
          </p>
          <p>
            Now I spend my time building products and tools that solve real
            problems — and having fun doing it.
          </p>
          <p className="font-mono text-sm text-accent">
            My go-to stack: React, TypeScript, Next.js, Node.js.
          </p>
        </section>

        <nav
          className="animate-fade-up mt-10 flex gap-8"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="https://github.com/msahores"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/manuelsahores"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manuel.sahores@gmail.com"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
        </nav>
      </main>
    </div>
  );
}
