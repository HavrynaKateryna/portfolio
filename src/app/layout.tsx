import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">

        <div className="fixed inset-0 -z-20">
          <div className="absolute w-[600px] h-[600px] bg-emerald-500/15 blur-[120px] top-[-200px] left-[-200px]" />
          <div className="absolute w-[700px] h-[700px] bg-emerald-400/10 blur-[140px] bottom-[-250px] right-[-250px]" />
        </div>

        <Header />

        <main className="relative z-10 pt-16">
          {children}
        </main>

      </body>
    </html>
  );
}