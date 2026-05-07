// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // --- Básico ---
  title: {
    default: "ByteClub Dev — Web Design & Development",
    template: "%s | ByteClub Dev",
  },
  description:
    "ByteClub Dev builds fast, modern digital solutions and web apps for ambitious brands. Design, development, and everything in between.",

  // --- Canonical & crawling ---
  metadataBase: new URL("https://byteclubdev.com"),
  alternates: {
    canonical: "/",
  },

  // --- Open Graph (Facebook, LinkedIn, WhatsApp) ---
  openGraph: {
    title: "ByteClub Dev — Web Design & Development",
    description:
      "Fast, modern digital solutions for ambitious brands. Design + development studio.",
    url: "https://byteclubdev.com",
    siteName: "ByteClub Dev",
    images: [
      {
        url: "/og-image.png", // 1200×630px
        width: 1200,
        height: 630,
        alt: "ByteClub Dev — Web Design & Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ByteClub Dev — Web Design & Development",
    description: "Fast, modern digital solutions for ambitious brands.",
    images: ["/og-image.png"],
  },

  // --- Keywords
  keywords: [
    "web design",
    "web development",
    "Next.js",
    "React",
    "freelance developer",
    "modern websites",
    "ByteClub Dev",
  ],

  // --- Robots ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon moderno — Next.js los toma de /app/icon.png automáticamente,
         */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link rel="icon" href="/icon.svg" type="image/svg+xml" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
