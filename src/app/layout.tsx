import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: {
    default: " Kateryna Havryna",
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
  ],

  authors: [{ name: "Kateryna Havryna" }],
  creator: "Kateryna Havryna",

  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },

  openGraph: {
    title: "Kateryna Havryna",
    description:
      "Full-Stack Developer specializing in React, Next.js and TypeScript",
    url: "https://your-domain.com",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden">

        {/* BACKGROUND BLOBS */}
        <div className="bg">
          <div className="blob1" />
          <div className="blob2" />
        </div>

        {/* NOISE */}
        <div className="noise" />

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="relative z-10 pt-16">
          {children}
        </main>

      </body>
    </html>
  );
}