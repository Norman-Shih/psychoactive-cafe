import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { drop, faqItems } from "@/lib/site";

export default function DropPage() {
  return (
    <div className="space-y-10 pt-8">
      <SectionHeading
        eyebrow={drop.eyebrow}
        title="一頁講清楚這次發售，而不是把所有品牌話一次說完"
        body="這個頁面是給廣告、深連結與後續 campaign 使用的產品核心頁。內容比首頁更聚焦在發售條件、節奏與可信度。"
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Drop Details</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--accent-soft)]">
            {drop.name}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">{drop.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
              <p className="text-sm text-[var(--muted)]">訂金</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--accent-soft)]">{drop.reservePrice}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
              <p className="text-sm text-[var(--muted)]">限量</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--accent-soft)]">120 名</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/10 p-5 sm:col-span-2">
              <p className="text-sm text-[var(--muted)]">發售節奏</p>
              <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                {drop.shipWindow} {drop.allocation}
              </p>
            </div>
          </div>
          <Link href="/reserve" className="button-primary mt-8 px-6 py-3 text-base">
            進入預約流程
          </Link>
        </div>
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">FAQ</p>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-[var(--accent-soft)]">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
