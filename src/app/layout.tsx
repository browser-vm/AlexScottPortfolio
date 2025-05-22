import "@/styles/globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { type Metadata } from "next";
import { DevtoolsProvider } from 'creatr-devtools';
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  title: {
    default: "Alex Scott | Portfolio",
    template: "%s | Alex Scott"
  },
  description: "Portfolio of Alex Scott - High school student pursuing Music Performance and Graphic Design with expertise in software development and digital music production.",
  applicationName: "Alex Scott Portfolio",
  keywords: ["music production", "graphic design", "software development", "student portfolio", "Alex Scott"],
  authors: [{
    name: "Alex Scott"
  }],
  creator: "Alex Scott",
  publisher: "Alex Scott",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Alex Scott Portfolio"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} data-unique-id="10f2f138-2573-4c4e-ae94-a7fff29d344f" data-file-name="app/layout.tsx">
      <body data-unique-id="96e5c376-5896-4890-b3e6-e9d27ae8a952" data-file-name="app/layout.tsx">
        <DevtoolsProvider>{children}</DevtoolsProvider>
      </body>
    </html>;
}