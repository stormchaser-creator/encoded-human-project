import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Encoded Human Project",
    template: "%s | The Encoded Human Project",
  },
  description:
    "Open research into how biological, psychological, and consciousness-level patterns interact in the human system.",
  openGraph: {
    title: "The Encoded Human Project",
    description:
      "Open research into how biological, psychological, and consciousness-level patterns interact in the human system.",
    type: "website",
    url: "https://theencodedhumanproject.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] mt-24">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 font-sans tracking-wider uppercase">
                  The Encoded Human Project
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Open research into how biological, psychological, and
                  consciousness-level patterns interact in the human system.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 font-sans tracking-wider uppercase">
                  Research
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li><a href="/research" className="hover:text-crimson transition-colors">Papers & Findings</a></li>
                  <li><a href="/framework" className="hover:text-crimson transition-colors">The Framework</a></li>
                  <li><a href="/about" className="hover:text-crimson transition-colors">About</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 font-sans tracking-wider uppercase">
                  License
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  All content licensed under{" "}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson hover:underline"
                  >
                    CC-BY-SA 4.0
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[var(--muted-foreground)]">
                © {new Date().getFullYear()} Eric Whitney, MD. The Encoded Human Project.
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                Epistemic tags on every claim.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
