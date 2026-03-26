import Link from "next/link";
import type { ReactNode } from "react";

import { drop, navItems, site } from "@/lib/site";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(207,124,63,0.2),_transparent_35%),radial-gradient(circle_at_80%_10%,_rgba(149,68,29,0.18),_transparent_28%),linear-gradient(180deg,_#16110d_0%,_#1d140f_30%,_#120d09_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[rgba(222,167,103,0.12)] blur-3xl" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-20 rounded-full border border-white/10 bg-[rgba(24,17,13,0.78)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(246,220,183,0.25)] bg-[rgba(249,225,194,0.08)] text-sm font-semibold tracking-[0.25em] text-[var(--accent)]">
                PC
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl leading-none text-[var(--accent-soft)]">
                  {site.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Ritual coffee for remembered mornings
                </p>
              </div>
            </Link>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/6 hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link href={site.reserveHref} className="button-primary px-4 py-2 text-sm">
                {drop.reserveLabel}
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 pt-8">{children}</main>
        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-[var(--muted)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--accent-soft)]">
                {drop.eyebrow}
              </p>
              <p className="mt-2 max-w-xl">
                第一版網站目前以繁體中文為主，先驗證 Ritual Coffee 是否能轉化為真實的預約需求。
              </p>
            </div>
            <div className="space-y-1 text-left md:text-right">
              <p>目前路線：故事驅動的轉換站，而非完整品牌入口。</p>
              <p>下一步：金流、名單與分析事件接入。</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
