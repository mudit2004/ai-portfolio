import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mudit Golchha — AI Portfolio",
  description: "An interactive portfolio powered by AI — explore my skills, projects, and passions through conversation.",
  keywords: [
    "Mudit Golchha",
    "AI Portfolio",
    "Developer",
    "Interactive Resume",
    "Web Development",
    "Machine Learning",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Mudit Golchha",
      url: "https://muditgolchha.dev",
    },
  ],
  creator: "Mudit Golchha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muditgolchha.dev",
    title: "Mudit Golchha — AI Portfolio",
    description: "Chat with an AI-powered version of me to learn about my projects, skills, and story.",
    siteName: "Mudit Golchha — AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudit Golchha — AI Portfolio",
    description: "An AI-driven portfolio experience — ask me anything!",
    creator: "@your_twitter", // <- replace with your handle or remove
  },
  icons: {
    icon: [
      {
        url: "/logo-mudit.png",  // ✅ use your PNG logo here
        sizes: "any",
      },
    ],
    shortcut: "/logo-mudit.png",
    apple: "/logo-mudit.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}