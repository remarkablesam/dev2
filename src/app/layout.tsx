import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevLearn Pro - Master Web Development",
  description: "Learn HTML, CSS, and JavaScript with interactive courses. Practice coding, join discussions, and earn certificates!",
  keywords: ["web development", "HTML", "CSS", "JavaScript", "coding", "programming", "online learning", "certificates"],
  authors: [{ name: "DevLearn Pro Team" }],
  openGraph: {
    title: "DevLearn Pro - Master Web Development",
    description: "Interactive web development courses with community support and verified certificates",
    url: "https://devlearnpro.example.com",
    siteName: "DevLearn Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevLearn Pro - Master Web Development",
    description: "Interactive web development courses with community support and verified certificates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
