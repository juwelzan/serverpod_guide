import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serverpod Bangla Academy | Flutter থেকে Full-Stack Developer",
  description:
    "Flutter ডেভেলপারদের জন্য সম্পূর্ণ বাংলায় আধুনিক Serverpod ব্যাকএন্ড ডেভেলপমেন্ট মাস্টারক্লাস। Database, Auth, Real-time ও VPS Deployment হাতে-কলমে শিখুন।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
