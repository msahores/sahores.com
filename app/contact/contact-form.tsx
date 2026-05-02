"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const intents = [
  "Freelance project",
  "Collaboration",
  "Just saying hi",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY ?? "");
    data.append("from_name", "sahores.com");
    data.append(
      "subject",
      `New contact from sahores.com — ${data.get("intent") ?? ""}`,
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-2 font-serif">
        <p className="text-foreground text-lg sm:text-xl">
          Thanks — message sent.
        </p>
        <p className="text-muted text-sm sm:text-base">
          I&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          className={inputCls}
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
        />
      </Field>

      <Field label="What can I help with?" htmlFor="intent">
        <select
          id="intent"
          name="intent"
          required
          defaultValue=""
          className={inputCls}
        >
          <option value="" disabled>
            Choose one
          </option>
          {intents.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          minLength={10}
          className={`${inputCls} resize-y`}
        />
      </Field>

      {status === "error" && (
        <p className="font-mono text-xs text-accent sm:text-sm">
          Something went wrong. Please try again or email me directly at{" "}
          <a
            href="mailto:manuel.sahores@gmail.com"
            className="underline underline-offset-4"
          >
            manuel.sahores@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent text-background font-mono text-xs uppercase tracking-widest sm:text-sm rounded-sm px-5 py-3 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-sm border border-surface bg-transparent px-3 py-2 font-serif text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block space-y-2">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
