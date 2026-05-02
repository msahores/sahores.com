import { GridMark } from "./grid-mark";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center px-5 py-12 sm:px-6">
      <ThemeToggle />
      <main className="w-full max-w-lg">
        <div className="animate-fade-up">
          <p className="font-mono text-xs tracking-widest text-muted uppercase sm:text-sm">
            Product Engineer
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
            gaming platforms, rich media ads for Google, club management tools,
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
          className="animate-fade-up mt-8 flex flex-wrap gap-5 sm:mt-10 sm:gap-6"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="https://github.com/msahores"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/manuelsahores"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href="mailto:manuel.sahores@gmail.com"
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </nav>
      </main>
    </div>
  );
}
