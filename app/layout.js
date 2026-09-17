import "./globals.css";
import IconSprite from "@/components/IconSprite";
import AosInit from "@/components/AosInit";

export const metadata = {
  title: "Flowbridge",
  description:
    "Flowbridge is an automation & AI studio building the systems that quietly run the repetitive parts of your business.",
};

// Applies the saved (or system) theme before paint, so there is no
// light-flash while React hydrates.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('flowbridge-theme');
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-bg text-ink">
        <IconSprite />
        <AosInit />
        {children}
      </body>
    </html>
  );
}
