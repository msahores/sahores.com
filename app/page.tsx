import { GridMark } from "./grid-mark";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center px-5 py-12 sm:px-6">
      <ThemeToggle />
      <main className="w-full max-w-lg">
        <div className="animate-fade-up">
          <p className="font-mono text-xs tracking-widest text-muted uppercase sm:text-sm">
            Creative Engineer
          </p>

          <h1 className="mt-3 font-sans text-4xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-6xl">
            Manuel
            <br />
            Sahores
          </h1>
        </div>

        <div
          className="animate-fade-up mt-8 sm:mt-10"
          style={{ animationDelay: "0.15s" }}
        >
          <GridMark />
        </div>

        <section
          className="animate-fade-up mt-8 max-w-md space-y-3 font-sans text-sm leading-relaxed text-muted sm:mt-10 sm:space-y-4 sm:text-base"
          style={{ animationDelay: "0.3s" }}
        >
          <p>
            I&apos;m Manuel — I&apos;ve been building for the web for over
            10 years.
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
          <p className="font-mono text-xs text-accent sm:text-sm">
            My go-to stack: React, TypeScript, Next.js, Node.js.
          </p>
        </section>

        <nav
          className="animate-fade-up mt-8 flex flex-wrap gap-5 sm:mt-10 sm:gap-8"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="https://github.com/msahores"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-accent sm:text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/manuelsahores"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-accent sm:text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manuel.sahores@gmail.com"
            className="font-mono text-xs text-muted transition-colors hover:text-accent sm:text-sm"
          >
            Email
          </a>
        </nav>
      </main>
    </div>
  );
}
