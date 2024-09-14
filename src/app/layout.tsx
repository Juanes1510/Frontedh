import localFont from "next/font/local";
import { Header } from "@/app/fonts/components/Header";
import { Footer } from "@/app/fonts/components/Footer";
import "@/styles/variables.css";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}