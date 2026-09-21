import "./globals.css";
import IconSprite from "@/components/IconSprite";
import AosInit from "@/components/AosInit";

export const metadata = {
  title: "Flowbridge — Automation & AI studio",
  description:
    "Flowbridge is an automation and AI studio building the systems that quietly run the repetitive parts of your business: social media, leads, WhatsApp, voice, operations and dashboards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink">
        <IconSprite />
        <AosInit />
        {children}
      </body>
    </html>
  );
}
