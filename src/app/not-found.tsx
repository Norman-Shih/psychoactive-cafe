import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl pt-16">
      <div className="glass-card rounded-[2.5rem] p-8 text-center sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">404</p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--accent-soft)]">
          這頁還沒有被沖煮出來。
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          目前網站先聚焦第一波繁體中文體驗。你可以先回到首頁，或直接進入首波預約頁。
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary px-6 py-3 text-base">
            回首頁
          </Link>
          <Link href="/reserve" className="button-secondary px-6 py-3 text-base">
            前往預約
          </Link>
        </div>
      </div>
    </div>
  );
}
