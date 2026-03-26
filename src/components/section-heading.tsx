type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">{body}</p>
    </div>
  );
}
