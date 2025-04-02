import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import ReactQueryProvider from "@/layout/react-query-provider";
import UserProvider from "@/context/user";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "Spacefinda Admin",
  description: "Spacefinda admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <ReactQueryProvider>
          <UserProvider>
            <Toaster richColors position="top-right"/>
            {children}
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
