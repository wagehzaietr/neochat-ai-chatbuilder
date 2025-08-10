import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neochat Ai | Create Custom AI Chatbots with Gemini",
  description:
    "Build and customize AI chatbots with unique personas, moods, and images. Powered by Google Gemini AI, Neochat Ai lets you design smart, engaging bots for websites, brands, and personal use.",
  keywords: [
    "AI chatbot builder",
    "create AI bot",
    "Gemini AI",
    "custom personas",
    "AI conversation",
    "chatbot for websites",
    "shadcn",
    "Next.js chatbot",
    "interactive AI",
    "personalized AI assistant",
  ],
  openGraph: {
    title: "Neochat Ai — Build Your Own AI Chatbot with Gemini AI",
    description:
      "Design and embed AI chatbots with unique personas, moods, and images. Powered by Google Gemini for natural, intelligent conversations.",
    url: "https://yourdomain.com",
    siteName: "Neochat Ai",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neochat Ai AI Chatbot Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neochat Ai | AI Chatbot Creator",
    description:
      "Create and customize AI chatbots with personas, moods, and images — powered by Google Gemini AI.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@neochat_ai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}