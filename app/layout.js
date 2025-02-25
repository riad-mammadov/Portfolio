import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Riad Mammadov",
  description: "Created by Riad Mammadov",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black h-full antialiased`}
      >
        <React.StrictMode>{children}</React.StrictMode>
      </body>
    </html>
  );
}
