import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { drop, reserveSteps } from "@/lib/site";

export default function ReservePage() {
  return (
    <div className="grid gap-8 pt-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Reserve"
          title="先用一筆小承諾，換一個更完整的早晨"
          body="這裡先以繁體中文整理出第一版預約流程，讓後續接 Stripe 或付款連結時不需要重做文案與結構。"
        />
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">預約流程</p>
          <div className="mt-6 space-y-4">
            {reserveSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-black/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">0{index + 1}</p>
                <p className="mt-2 text-base leading-7 text-[var(--muted)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="glass-card rounded-[2rem] p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Current CTA</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--accent-soft)]">
          {drop.reservePrice}
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--muted)]">{drop.shipWindow}</p>
        <p className="mt-4 text-base leading-8 text-[var(--muted)]">
          目前先用靜態頁面確認文案、順序與承諾方式。下一步會把這裡接到實際的金流與 email 事件。
        </p>
        <div className="mt-8 rounded-[2rem] border border-dashed border-[rgba(222,167,103,0.45)] bg-[rgba(222,167,103,0.08)] p-5">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">Integration Placeholder</p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            實際付款尚未接入。產品上線時，這裡將銜接 Stripe Checkout 或付款連結。
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/reserve/success" className="button-primary px-6 py-3 text-base">
            模擬完成預約
          </Link>
          <Link href="/drops/ancestor-roast-no-1" className="button-secondary px-6 py-3 text-base">
            回到產品頁
          </Link>
        </div>
      </div>
    </div>
  );
}
