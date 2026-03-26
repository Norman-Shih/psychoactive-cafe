import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteShell } from "@/components/site-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL("https://psychoactive.cafe"),
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={site.locale}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
