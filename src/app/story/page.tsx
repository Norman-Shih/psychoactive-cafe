import { SectionHeading } from "@/components/section-heading";
import { storySections } from "@/lib/site";

export default function StoryPage() {
  return (
    <div className="space-y-10 pt-8">
      <SectionHeading
        eyebrow="Story"
        title="讓品牌故事變成一個可以被實踐的早晨"
        body="Psychoactive Cafe 的第一個敘事不是逃離現實，而是讓你在進入現實之前先回到自己。"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {storySections.map((section, index) => (
          <article
            key={section.title}
            className="glass-card rounded-[2rem] p-6"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Chapter {index + 1}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--accent-soft)]">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{section.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
