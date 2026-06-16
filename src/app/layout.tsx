import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  metadataBase: new URL("https://www.katerynahavryna.com"),

  title: {
    default: "Kateryna Havryna",
    template: "%s | Kateryna Havryna",
  },

  description:
    "Full-Stack Developer specializing in React, Next.js and TypeScript",

  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Developer",
    "Full Stack Developer",
    "Portfolio",
  ],

  authors: [{ name: "Kateryna Havryna" }],
  creator: "Kateryna Havryna",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Kateryna Havryna",
    description:
      "Full-Stack Developer specializing in React, Next.js and TypeScript",
    url: "https://www.katerynahavryna.com",
    siteName: "Kateryna Portfolio",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kateryna Havryna",
    description:
      "Full-Stack Developer specializing in React, Next.js and TypeScript",
    images: ["/og.jpg"],
  },

  other: {
    "google-site-verification": "Nw3d3cF8RZXiyOFS-DhYDNZmR3SD-gkGN_uLc_5WRB8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <div className="bg">
          <div className="blob1" />
          <div className="blob2" />
        </div>

        <div className="noise" />

        <Header />

        <main className="relative z-10 pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}