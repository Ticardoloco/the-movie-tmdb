import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/general/footer";
import Header from "@/components/general/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Movie Database (TMDB)",
  description: "The Movie Database (TMDB is a community-driven platform offering detailed information on movies, TV shows, and actors, widely used by developers through its free API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scroll overflow-x-auto`}
      >
        <main className="flex min-h-full h-auto grow shrink basis-auto relative top-0 left-0">
         <Header/>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
