import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google"
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter", // 👈 Ek clear variable name de diya
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "React Labs - Master React",
  description: "Learn React by building real-world projects.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`} // 👈 Inter variable yahan use kiya
    >
      {/* Agar Method 1 use kar rahe ho toh class="font-sans" zaroor lagana */}
      <body className="min-h-full flex flex-col font-inter bg-[#0d0e12] text-white">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}