import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { HomeLink } from "@/components/home-link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Wyatt's Projects",
    description: "My Portoflio Site",
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
                                <HomeLink />
                                <ModeToggle />
                            </div>
                        </header>
                        <main className="w-full">{children}</main>
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
