import Link from "next/link";
import type { ReactNode } from "react";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: ContentPageProps) {
  return (
    <div className="relative z-[1] mx-auto max-w-3xl px-4 pb-24 pt-28 sm:pt-32 lg:px-8 lg:pt-36">
      <p className="text-sm font-bold uppercase tracking-widest text-[var(--highlight)]">
        {eyebrow}
      </p>
      <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg text-[var(--text-muted)]">{description}</p>
      ) : null}
      <div className="mt-12 space-y-6 text-base leading-relaxed text-[var(--text-muted)] [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--text-primary)] [&_h2]:first:mt-0 [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-[var(--accent)] [&_a]:font-semibold [&_a]:text-[var(--accent)] [&_a]:underline-offset-2 hover:[&_a]:underline [&_strong]:font-semibold [&_strong]:text-[var(--text-primary)]">
        {children}
      </div>
      <div className="mt-16 border-t border-[var(--border-subtle)] pt-8">
        <Link
          href="/"
          className="text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--highlight)]"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
