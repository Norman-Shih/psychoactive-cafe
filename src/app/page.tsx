import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { drop, faqItems, heroSignals, metrics, offerPoints, site, timeline } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="grid gap-8 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="fade-rise">
          <p className="text-sm uppercase tracking-[0.34em] text-[var(--accent)]">{drop.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl lg:text-7xl">
            把每天的第一杯咖啡，
            <span className="mt-2 block text-[var(--accent-soft)]">變成你記得自己正在活著的方式。</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {drop.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.reserveHref} className="button-primary px-6 py-3 text-base">
              {drop.reserveLabel}
            </Link>
            <Link href="/story" className="button-secondary px-6 py-3 text-base">
              先讀品牌故事
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroSignals.map((signal) => (
              <div key={signal} className="glass-card rounded-3xl p-4 text-sm leading-7 text-[var(--muted)]">
                {signal}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card fade-rise rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">首波儀式測試</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--accent-soft)]">
                {drop.name}
              </p>
              <p className="mt-2 text-base leading-7 text-[var(--muted)]">{drop.tagline}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
              <p className="text-sm text-[var(--muted)]">預約條件</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--accent-soft)]">{drop.reservePrice}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{drop.shipWindow}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{drop.allocation}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-semibold text-[var(--accent-soft)]">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Offer"
          title="不是高冷精品頁，而是能夠成交的儀式頁"
          body="第一版網站的工作不是介紹一切，而是把人帶到願意預約的狀態。故事、節奏與產品細節都必須為這個轉換服務。"
        />
        <div className="grid gap-4">
          {offerPoints.map((point) => (
            <article key={point.title} className="glass-card rounded-[2rem] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--accent-soft)]">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{point.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <SectionHeading
            eyebrow="Timeline"
            title="讓承諾夠真，但不讓流程變重"
            body="我們先測試需求，再把後續溝通做扎實。這樣比較像一個有秩序的發售，而不是一場焦躁的搶購。"
          />
          <div className="mt-8 space-y-4">
            {timeline.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/4 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">{item.label}</p>
                <p className="mt-2 text-base leading-7 text-[var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <SectionHeading
            eyebrow="FAQ"
            title="先回答最實際的問題"
            body="如果品牌只有氣氛沒有可信度，就很難換到真實付款。第一版中文頁面把關鍵疑慮放在明面上說清楚。"
          />
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-black/10 p-5">
                <h3 className="text-lg font-semibold text-[var(--accent-soft)]">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
