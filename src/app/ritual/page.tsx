import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { ritualSteps } from "@/lib/site";

export default function RitualPage() {
  return (
    <div className="space-y-10 pt-8">
      <SectionHeading
        eyebrow="Ritual"
        title="把喝咖啡從機械反應，變成有意識地進場"
        body="這一頁不是教條，而是一個輕量的節奏建議。它讓產品價值落在具體體驗裡，而不只是文字風格。"
      />
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Morning Sequence</p>
          <div className="mt-6 space-y-4">
            {ritualSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-black/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">Step {index + 1}</p>
                <p className="mt-2 text-base leading-7 text-[var(--muted)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--accent-soft)]">
            儀式不是為了變得玄，而是為了降低雜訊。
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            如果一個品牌宣稱自己有靈魂，但不能引導一個具體行為，那只是包裝。第一版中文網站把
            ritual 放在可操作的層級：少一點神話，多一點可重複的節奏。
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            你不需要相信任何宏大敘事，只需要給自己三分鐘。剩下的感受，讓味道和記憶去完成。
          </p>
          <Link href="/reserve" className="button-primary mt-8 px-6 py-3 text-base">
            我想加入首波預約
          </Link>
        </div>
      </div>
    </div>
  );
}
