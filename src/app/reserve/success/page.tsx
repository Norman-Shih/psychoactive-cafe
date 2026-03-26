import Link from "next/link";

export default function ReserveSuccessPage() {
  return (
    <div className="mx-auto max-w-3xl pt-16">
      <div className="glass-card rounded-[2.5rem] p-8 text-center sm:p-12">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]">Reserve Success</p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--accent-soft)]">
          你已經把這個早晨留了下來。
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          下一版會在這裡接上確認信、分享引導與訪談邀請。這一頁先把成功狀態與後續節奏翻成繁體中文，確保整條路徑一致。
        </p>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">01</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">確認 email 與付款回執會在正式接金流後發送。</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">02</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">預約者會優先收到發售與出貨節奏更新。</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/10 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">03</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">願意的話，我們會邀請你參與一次簡短訪談。</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary px-6 py-3 text-base">
            回首頁
          </Link>
          <Link href="/story" className="button-secondary px-6 py-3 text-base">
            繼續閱讀故事
          </Link>
        </div>
      </div>
    </div>
  );
}
