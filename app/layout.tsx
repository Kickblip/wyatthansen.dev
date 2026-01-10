import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/ThemeProvider"
import ModeToggle from "@/components/ModeToggle"
import { BsHouse } from "react-icons/bs"
import { IoHeart } from "react-icons/io5"
import { LINKS } from "@/app/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wyatt's Portfolio",
  description:
    "I like machine learning, robotics, and web development. I'm an undergraduate student working in the Human-Aware Planning and AI lab at CSU. Here are some of the projects I've worked on...",
  author: "Wyatt",
  keywords: ["TypeScript", "Projects", "Portfolio", "JavaScript", "React", "Coding"],
  locale: "en_US",
  siteName: "Wyatt's Portfolio",
  image: "/metacover.png",
  url: "wyatthansen.dev/",
  type: "website",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-[#ffffff] dark:bg-[#171717] text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-4xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/" className="border rounded-md w-8 h-8 flex items-center justify-center">
                  <BsHouse size={18} className="" />
                </Link>

                <ModeToggle />
              </div>
            </header>
            <main className="w-full">{children}</main>
            <footer className="mt-10">
              <div className="flex justify-center items-center gap-1.5 text-black dark:text-white">
                <span>Made with</span>
                <IoHeart size={17} />
                <span>by</span>
                <Link href={LINKS.repo} target="_blank" rel="noopener noreferrer">
                  <span className="underline font-medium">Kickblip</span>
                </Link>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
