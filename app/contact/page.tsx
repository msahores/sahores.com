import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Get in touch — Manuel Sahores",
  description:
    "Available for freelance projects and collaborations. Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-svh items-center justify-center px-5 py-12 sm:px-6">
      <ThemeToggle />
      <main className="w-full max-w-lg">
        <div className="animate-fade-up">
          <Link
            href="/"
            className="font-mono text-xs text-muted transition-colors hover:text-accent sm:text-sm"
          >
            ← Back
          </Link>

          <h1
            className="mt-6 text-3xl font-bold leading-tight tracking-wide sm:mt-8 sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in touch
          </h1>

          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-muted sm:mt-6 sm:text-base">
            Available for freelance projects and collaborations. Tell me what
            you&apos;re working on — I usually reply within a couple of days.
          </p>
        </div>

        <div
          className="animate-fade-up mt-8 sm:mt-10"
          style={{ animationDelay: "0.15s" }}
        >
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
